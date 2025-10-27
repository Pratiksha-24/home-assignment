import React, { useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Alert, CircularProgress, Typography } from "@mui/material";
import { CoinCell, ContainerStyled, Controls } from "../../styles";
import Header from "../common/Header";
import CryptoTable from "../common/Table";
import { Filter } from "../common/Filter";
import { SearchInput } from "../common/SearchInput";
import { Coin, useCoins } from "../../hooks/useCoins";

export const Home: React.FC = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const { data: coins = [], isLoading, isError, error } = useCoins();

    const filteredCoins = coins
        .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
        .filter((c) => {
            if (filter === "gainers") return c.price_change_percentage_24h > 0;
            if (filter === "losers") return c.price_change_percentage_24h < 0;
            if (filter === "top10") return c.market_cap_rank <= 10;
            return true;
        });

    const columns = useMemo<ColumnDef<Coin>[]>(
        () => [
            { accessorKey: "market_cap_rank", header: "Rank" },
            {
                accessorKey: "name",
                header: "Coin",
                cell: (info) => (
                    <CoinCell>
                        <img src={info.row.original.image} width={25} alt={info.getValue() as string} />
                        {info.getValue() as string}
                    </CoinCell>
                ),
            },
            {
                accessorKey: "current_price",
                header: "Price (USD)",
                cell: (info) => `$${(info.getValue() as number).toLocaleString()}`,
            },
            {
                accessorKey: "price_change_percentage_24h",
                header: "24hour Change",
                cell: (info) => (
                    <span style={{ color: (info.getValue() as number) > 0 ? "green" : "red" }}>
                        {(info.getValue() as number)?.toFixed(2)}%
                    </span>
                ),
            },
        ],
        []
    );

    return <>
        <Header />
        <ContainerStyled>
            {!isLoading && !isError && (
                <Controls>
                    <SearchInput search={search} setSearch={setSearch} />
                    <Filter filter={filter} setFilter={setFilter} />
                </Controls>
            )}

            {isLoading && (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <CircularProgress />
                    <Typography>Loading crypto data...</Typography>
                </div>
            )}

            {isError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error?.message || "Failed to fetch crypto data"}
                </Alert>
            )}

            {!isLoading && !isError && filteredCoins.length === 0 && (
                <Alert severity="info" sx={{ mb: 2 }}>
                    No coins match your search/filter criteria.
                </Alert>
            )}

            {!isLoading && !isError && filteredCoins.length > 0 && (
                <CryptoTable filteredCoins={filteredCoins} columns={columns} />
            )}
        </ContainerStyled>
    </>
}

export default Home;