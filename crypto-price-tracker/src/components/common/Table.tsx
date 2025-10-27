import React from "react";
import { Paper, TableContainer } from "@mui/material";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
    ColumnDef,
} from "@tanstack/react-table";
import { TableStyled } from "../../styles";
import { Coin } from "../../hooks/useCoins";

interface TableProps {
    filteredCoins: Coin[];
    columns: ColumnDef<Coin>[];
}

const CryptoTable: React.FC<TableProps> = ({ filteredCoins, columns }) => {
    const table = useReactTable({
        data: filteredCoins,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <TableContainer component={Paper}>
            <TableStyled>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {{
                                        asc: " ⬆️",
                                        desc: " ⬇️",
                                    }[header.column.getIsSorted() as string] ?? " ↕️"}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </TableStyled>
        </TableContainer>
    );
};



export default CryptoTable;