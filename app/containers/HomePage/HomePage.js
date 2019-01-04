
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import actions from './actions';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ExpenseDialog from '../ExpenseDialog'

const styles = ({    
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
  });

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }
  
    render() {
        const { classes } = this.props;

        return (            
            <AppBar position="fixed" color="primary" className={classes.appBar}>
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
        );
    }
}

HomePage.propTypes = {	
    dispatch: PropTypes.func.isRequired
};

export default withStyles(styles)(HomePage);