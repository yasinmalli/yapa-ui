import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Table, TableHead, TableRow, TableBody, TableCell, Grid } from "@material-ui/core";

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
};

const styles = theme => ({
    tableResponsive: {
        width: "100%",
        marginTop: theme.spacing.unit,
        // overflowX: "auto",
        // padding: "15px"
    },

    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderCollapse: "collapse"
    },

    tableHeadCell: {
        color: "inherit",
        ...defaultFont,
        fontSize: "1em",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },

    tableCell: {
        ...defaultFont,
        lineHeight: "1.42857143",
        padding: "8px 10px",
        verticalAlign: "middle"
    },
    
    warningTableHeader: {
        color: "#ff9800"
    },

    grayTableHeader: {
        color: "#999999"
    }
});

class DataTable extends React.PureComponent {
    render() {
        const { classes, head, data, headerColor, columnWidth } = this.props;        
        return (
            <div className={classes.tableResponsive}>
                <Table className={classes.table}>
                    <TableHead className={classes[headerColor + "TableHeader"]}>
                        <TableRow>
                            <Grid container justify="center" xs={12}>
                            {
                                head.map((prop, key) => {
                                    return (
                                        <Grid item xs={columnWidth[key]} zeroMinWidth>
                                            <TableCell className={classes.tableCell + " " + classes.tableHeadCell} key={key}>
                                                {prop}
                                            </TableCell>
                                        </Grid>
                                    );
                                })
                            }
                            </Grid>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((prop, key) => {                                
                                return (
                                    <TableRow key={key}>
                                        <Grid container justify="center" xs={12}>
                                        {                                            
                                            prop.map((prop, key) => {                                                
                                                return (                                                    
                                                    <Grid item xs={columnWidth[key]}>
                                                        <TableCell className={classes.tableCell} key={key}>
                                                            {prop}
                                                        </TableCell>                  
                                                    </Grid>                                  
                                                );
                                            })
                                        }
                                        </Grid>
                                    </TableRow>
                                );
                            })
                        }                        
                    </TableBody>
                </Table>
            </div>
        )
    }
}

DataTable.propTypes = {
    classes: PropTypes.object.isRequired,
    head: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    columnWidth: PropTypes.arrayOf(PropTypes.number),
    headerColor: PropTypes.string
}

export default withStyles(styles)(DataTable);