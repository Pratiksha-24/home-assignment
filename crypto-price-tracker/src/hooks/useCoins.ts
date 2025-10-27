import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Coin {
    id: string;
    name: string;
    image: string;
    current_price: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    sparkline_in_7d?: { price: number[] };
}

const fetchCoins = async (): Promise<Coin[]> => {
    const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 100,
                page: 1,
                sparkline: true,
                price_change_percentage: "24h",
            },
        }
    );
    return data;
};

export const useCoins = () => {
    return useQuery<Coin[], Error>({
        queryKey: ["coins"],
        queryFn: fetchCoins,
        refetchInterval: 30000, // auto-refresh every 30s
        staleTime: 15000, // data is considered fresh for 15s
    });
};
