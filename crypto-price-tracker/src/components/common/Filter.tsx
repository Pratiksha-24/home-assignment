import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface FilterProps {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
}

export const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
    return (
        <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Filter</InputLabel>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <MenuItem value="all">🌍 All Coins</MenuItem>
                <MenuItem value="top10">💰 Top 10</MenuItem>
                <MenuItem value="gainers">📈 Gainers</MenuItem>
                <MenuItem value="losers">📉 Losers</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Filter;