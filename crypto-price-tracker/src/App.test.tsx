import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Crypto Price Tracker App", () => {
  const mockCoins = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      current_price: 68000,
      market_cap_rank: 1,
      price_change_percentage_24h: 2.5,
    },
    {
      id: "ethereum",
      name: "Ethereum",
      image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      current_price: 3500,
      market_cap_rank: 2,
      price_change_percentage_24h: -1.2,
    },
  ];

  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockCoins });
  });

  it("renders app title correctly", async () => {
    render(<App />);
    const title = await screen.findByText("💰 Crypto Price Tracker");
    expect(title).toBeInTheDocument();
  });

  it("displays coins after fetching data", async () => {
    render(<App />);

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText("Bitcoin")).toBeInTheDocument();
      expect(screen.getByText("Ethereum")).toBeInTheDocument();
    });

    // Check headers
    expect(screen.getByText(/Rank/i)).toBeInTheDocument();
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
  });

  it("shows loading state initially", () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] });
    render(<App />);
    expect(screen.getByText(/Loading cryptocurrency prices/i)).toBeInTheDocument();
  });
});
