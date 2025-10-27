import {
    AppBar,
    Toolbar,
    Typography,
    Switch,
    FormControlLabel,
} from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";


const Header = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();

    return (
        <AppBar position="sticky">
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">💰 Crypto Tracker</Typography>
                <FormControlLabel
                    control={
                        <Switch
                            checked={darkMode}
                            onChange={() => toggleDarkMode()}
                            slotProps={{ input: { 'aria-label': 'controlled' } }} />
                    }
                    label="Dark Mode"
                />
            </Toolbar >
        </AppBar >
    );
}

export default Header;