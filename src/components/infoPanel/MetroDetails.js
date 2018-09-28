import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Paper } from "../mui";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../mui/table";
import { Flex, justifyContent, alignItems } from "../layout/Flex";
import { compose } from "redux";
import { withDisplayProperty } from '../../hoc/withDisplayProperty';

const styles = (theme) => ({
  card: {
    width: "95%",
    margin: theme.spacing.unit
  }
});

const getRowData = (fundPropertyCounts) => {
  const rowData = [];
  for (let fundName in fundPropertyCounts) {
    let count = fundPropertyCounts[fundName];
    rowData.push({ fundName, count });
  }
  return rowData;
}

const MetroFundTableRows = ({ rowData }) => {
  return rowData.map((r, i) => (
    <TableRow key={i}>
      <TableCell>{r.fundName}</TableCell>
      <TableCell>{r.count}</TableCell>
    </TableRow>
  ));
}

const MetroFundTable = ({ rowData }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Fund</TableCell>
        <TableCell>Properties</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <MetroFundTableRows rowData={rowData} />
    </TableBody>
  </Table>
);

const MetroDetails = ({ selectedMetro, classes }) => {
  const rowData = getRowData(selectedMetro.fundPropertyCounts);
  return (
    <Flex justifyContent={justifyContent.center} alignItems={alignItems.center}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline">{selectedMetro.name}</Typography>
          <Typography variant="subheading">{selectedMetro.propertyCount} properties</Typography>
        </CardContent>
      </Card>
      <Paper className={classes.card}>
        <MetroFundTable rowData={rowData} />
      </Paper>
    </Flex>
  );
}


export default compose(
  withStyles(styles),
  withDisplayProperty("selectedMetro")
)(MetroDetails);
