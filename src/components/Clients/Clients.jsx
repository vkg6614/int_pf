import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  action,
  clienttype,
  status,
  clientname,
  entitycode,
  totalquote,
  totalpolicy,
  email
) {
  return {
    action,
    clienttype,
    status,
    clientname,
    entitycode,
    totalquote,
    totalpolicy,
    email,
  };
}

const rows = [
  createData("edit", 1, "active", "ram", 4.0, 302, 120000, "vik"),
  createData("edit", 1, "active", "ram", 4.0, 302, 120000, "vik"),
  createData("edit", 1, "active", "ram", 4.0, 302, 120000, "vik"),
  createData("edit", 1, "active", "ram", 4.0, 302, 120000, "vik"),
  createData("edit", 1, "active", "ram", 4.0, 302, 120000, "vik"),
];

const Clients = () => {
  return (
    <div className="btnMargin">
      <button type="button">Add Clients</button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>Dessert</StyledTableCell> */}
              <StyledTableCell>Action</StyledTableCell>
              <StyledTableCell align="center">Client Type</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Client name</StyledTableCell>
              <StyledTableCell align="center">Entity Code</StyledTableCell>
              <StyledTableCell align="center">Total Quote</StyledTableCell>
              <StyledTableCell align="center">Total Policy</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, ind) => (
              <StyledTableRow key={row.ind + 1}>
                <StyledTableCell component="th" scope="row">
                  {row.action}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.clienttype}
                </StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.clientname}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.entitycode}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.totalquote}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.totalpolicy}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Clients;
