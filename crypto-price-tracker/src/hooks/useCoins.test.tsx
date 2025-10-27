import { renderHook } from "@testing-library/react-hooks";
import { useCoins, Coin } from "./useCoins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Create wrapper to provide React Query context
const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client= { queryClient } > { children } </QueryClientProvider>
  );
};

describe("useCoins hook", () => {
    const mockData: Coin[] = [
        {
            id: "bitcoin",
            name: "Bitcoin",
            image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
            current_price: 50000,
            market_cap_rank: 1,
            price_change_percentage_24h: 2.5,
            sparkline_in_7d: { price: [48000, 49000, 50000] },
        },
        {
            id: "ethereum",
            name: "Ethereum",
            image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
            current_price: 4000,
            market_cap_rank: 2,
            price_change_percentage_24h: -1.2,
            sparkline_in_7d: { price: [3800, 3900, 4000] },
        },
    ];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("fetches and returns coin data successfully", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: mockData });

        const { result, waitFor } = renderHook(() => useCoins(), {
            wrapper: createWrapper(),
        });

        await waitFor(() => result.current.isSuccess);

        expect(result.current.data).toEqual(mockData);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith(
            "https://api.coingecko.com/api/v3/coins/markets",
            expect.objectContaining({
                params: expect.objectContaining({ vs_currency: "usd" }),
            })
        );
    });

    it("handles API errors gracefully", async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

        const { result, waitFor } = renderHook(() => useCoins(), {
            wrapper: createWrapper(),
        });

        await waitFor(() => result.current.isError);

        expect(result.current.error).toBeInstanceOf(Error);
        expect(result.current.error?.message).toBe("Network Error");
    });
});
