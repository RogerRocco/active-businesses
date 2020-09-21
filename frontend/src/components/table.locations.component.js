import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TableLocationsComponent extends React.Component {
  render() {
    return (
      <TableContainer component={Paper} >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">business name</TableCell>
              <TableCell align="right">unit length</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">{row.business_name}</TableCell>
                <TableCell align="right">{row.unit_length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TableLocationsComponent;
