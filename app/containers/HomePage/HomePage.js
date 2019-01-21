
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import actions from './actions';

import { AppBar, Typography, Toolbar, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpenseDialog from '../ExpenseDialog'
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import { Card, CardHeader, CardBody } from '../../components/Card';
import DataTable from '../../components/Table/Table'

const styles = ({
    root: {
        flexGrow: 1
    },

    appBar: {
      top: 0,
      bottom: 'auto',
    },

    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: 30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },

    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px"
    },

    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      }
  });

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(actions.getExpenses());
    }
  
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div>
                    <AppBar position="static" color="primary" className={classes.appBar}>
                        <Toolbar className={classes.appBar}>
                            <Typography variant="h6" color="inherit" noWrap>
                                Dashboard
                            </Typography>                                                
                            <Fab color="secondary" aria-label="Add" className={classes.fabButton}
                                    onClick={() => { this.props.dispatch(actions.openAddExpenseForm()); }}>
                                <AddIcon />
                            </Fab>
                            <ExpenseDialog status={this.props.home.expenseFormOpen} 
                                        onClose={() => { this.props.dispatch(actions.closeExpenseForm()); }}>
                            </ExpenseDialog>                    
                        </Toolbar>                
                    </AppBar>
                </div>
                <div>
                    <GridContainer justify="center" spacing={16}>
                        <GridItem xs={12} sm={12} md={6}>
                            <Card>
                                <CardHeader color="warning">
                                    <h4 className={classes.cardTitleWhite}>Personal Spend Manager</h4>
                                    <p className={classes.cardCategoryWhite}>Transactions in the current month</p>
                                </CardHeader>
                                <CardBody>
                                    <DataTable
                                        headerColor="warning"
                                        head={["Transaction Date", "Transaction Details", "Category", "Price"]}
                                        data={this.props.home.expenses}
                                        columnWidth={[3, 4, 3, 1]}
                                    />
                                    {/* <ExpenseList expenses={this.props.home.expenses}/> */}
                                </CardBody>
                            </Card>                            
                        </GridItem>                        
                    </GridContainer>                    
                </div>
            </div>            
        );
    }
}

HomePage.propTypes = {	
    dispatch: PropTypes.func.isRequired
};

export default withStyles(styles)(HomePage);