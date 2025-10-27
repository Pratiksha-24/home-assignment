import styled from "styled-components";
import { Paper } from "@mui/material";

// Container for the app content
export const ContainerStyled = styled.div`
  margin: 1rem auto;
  max-width: 1200px;
`;

// Control section: search + filter
export const Controls = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

// Table styling
export const TableStyled = styled("table")(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
  "& th, & td": {
    padding: "8px",
    borderBottom: "1px solid rgba(224,224,224,1)",
  },
  "& th": {
    textAlign: "left",
  },
}));

// Coin cell: icon + name
export const CoinCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;