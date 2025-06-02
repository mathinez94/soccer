// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Tables({prediction}) {

  console.log(prediction);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
            <StyledTableCell align="right">Home Team</StyledTableCell>
            <StyledTableCell align="right">Away Team</StyledTableCell>
            <StyledTableCell align="right">Predicted Outcome</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prediction?.map((predict) => (
            <StyledTableRow key={predict.id}>
              <StyledTableCell component="th" scope="row">
                {predict.username.toUpperCase()}
              </StyledTableCell>
              <StyledTableCell align="right">{predict.country.toUpperCase()}</StyledTableCell>
              <StyledTableCell align="right">{predict.home.toUpperCase()}</StyledTableCell>
              <StyledTableCell align="right">{predict.away.toUpperCase()}</StyledTableCell>
              <StyledTableCell align="right">{predict.outcome.toUpperCase()}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
