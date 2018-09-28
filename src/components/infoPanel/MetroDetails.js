import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Paper, Toolbar } from "../mui";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../mui/table";
import { Flex, justifyContent, alignItems } from "../layout/Flex";
import { compose } from "redux";
import { withDisplayProperty } from '../../hoc/withDisplayProperty';

const styles = (theme) => {
  //console.log(theme);
  return ({
    card: {
      width: "95%",
      margin: theme.spacing.unit
    },
    titleContainer: {
      textAlign: "center",
      width: "100%",
      paddingTop: theme.spacing.unit
    },
    hr: {
      borderColor: theme.palette.divider
    },
    th: {
      fontWeight: "bold"
    }
  })
};

const getRowData = (fundPropertyCounts) => {
  const rowData = [];
  for (let fundName in fundPropertyCounts) {
    let count = fundPropertyCounts[fundName];
    rowData.push({ fundName, count });
  }
  return rowData;
}

const MetroFundTableRows = ({ rowData }) => {
  return rowData.map((r, i) => <MetroFundTableRow fundName={r.fundName} count={r.count} key={i} />);
}

const MetroFundTableRow = ({ fundName, count }) => (
  <TableRow>
    <TableCell>{fundName}</TableCell>
    <TableCell>{count}</TableCell>
  </TableRow>
)

const MetroFundTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell>Fund</TableCell>
      <TableCell>Properties</TableCell>
    </TableRow>
  </TableHead>
);

const MetroDetails = ({ selectedMetro, classes }) => {
  const rowData = getRowData(selectedMetro.fundPropertyCounts);
  return (
    <Flex justifyContent={justifyContent.center} alignItems={alignItems.center}>
      <Paper className={classes.card}>
        <Toolbar>
          <Typography variant="title">Properties by Fund</Typography>
        </Toolbar>
        {/* <div className={classes.titleContainer}>
          <Typography variant="title">Properties by Fund</Typography>
          <hr className={classes.hr} />
        </div> */}
        <Table>
          <MetroFundTableHead thClassName={classes.th} />
          <TableBody>
            <MetroFundTableRows rowData={rowData} />
          </TableBody>
        </Table>
      </Paper>
    </Flex>
  );
}


export default compose(
  withStyles(styles),
  withDisplayProperty("selectedMetro")
)(MetroDetails);
