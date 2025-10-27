import { TextField } from "@mui/material";
import { SetStateAction, Dispatch } from "react";

interface SearchProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchInput = ({ search, setSearch }: SearchProps) => {
    return (
        <TextField
            placeholder="Search coin"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ minWidth: 250 }}
        />
    );
}