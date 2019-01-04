import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { compose } from 'redux';
import actions from './actions';
import { expenseTypes } from '../App/constants'

import { withStyles } from '@material-ui/core/styles';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } 
from '@material-ui/core';

const styles = theme => ({ });

class ExpenseDialog extends React.PureComponent {
   
    componentDidMount() {        
        this.props.dispatch(actions.getMainCategories());
    }

    render() {
        var state = this.props.expenseDialog;
        var dispatch = this.props.dispatch;

        return (
            <div>        
            <Dialog open={this.props.status}>
                <DialogTitle id="form-dialog-title">{this.props.intl.formatMessage(messages.title)}</DialogTitle>
                <DialogContent>
                    <form noValidate autoComplete="off">
                        <FormControl fullWidth margin="dense">
                            <TextField autoFocus margin="dense" id="name" label="Price (CAD)" type="number" fullWidth
                            value={state.price} onChange={ e => dispatch(actions.selectPrice(e.target.value)) }/>
                        </FormControl>                    
                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="expense-main-category">Main Category</InputLabel>
                            <Select value={state.mainCategory.selected}                                 
                                onChange={ e => dispatch(actions.selectMainCategory(e.target.value)) }
                                margin="dense"
                                inputProps={{ name: 'main-category', id: 'expense-main-category' }}>                            
                                {                                    
                                    state.mainCategory.items && state.mainCategory.items.map(
                                        (mainCategory) => { 
                                            return <MenuItem key={mainCategory.id} value={mainCategory.id}>{mainCategory.name}</MenuItem>
                                        }
                                    )
                                }
                            </Select>                        
                        </FormControl>
                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="expense-sub-category">SubCategory</InputLabel>
                            <Select value={state.subCategory.selected} 
                                onChange={ e => dispatch(actions.selectSubCategory(e.target.value)) }
                                margin="dense"
                                inputProps={{ name: 'sub-category', id: 'expense-sub-category' }}>                            
                                {
                                    state.subCategory.items && state.subCategory.items.map(
                                        (subCategory) => { 
                                            return <MenuItem key={subCategory.id} value={subCategory.id}>{subCategory.name}</MenuItem>
                                        }
                                    )
                                }
                                
                            </Select>                        
                        </FormControl>
                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="expense-type">Expense Type</InputLabel>
                            <Select value = {state.expenseType}
                                onChange={ e => dispatch(actions.selectExpenseType(e.target.value)) }
                                margin="dense"
                                inputProps={{ name: 'expense-type', id: 'expense-type' }}>
                                { Object.keys(expenseTypes).map((key) => { return <MenuItem key={key} value={key}>{expenseTypes[key]}</MenuItem> }) }
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="dense">
                            <TextField margin="dense" id="spentAt" label="Spent At" fullWidth
                            value={state.spentAt} onChange={ e => dispatch(actions.setSpentAt(e.target.value)) }/>
                        </FormControl>
                        <FormControl fullWidth margin="dense">
                            <TextField margin="dense" id="description" label="Notes" fullWidth
                            value={state.description} onChange={ e => dispatch(actions.setDescription(e.target.value)) }/>
                        </FormControl>                        
                    </form>            
                </DialogContent>
              <DialogActions>
                <Button onClick={this.props.onClose} color="primary">
                    {this.props.intl.formatMessage(messages.cancel)}
                </Button>
                <Button onClick={ e =>  { dispatch(actions.addExpense()); this.props.onClose(); } } color="primary">
                    {this.props.intl.formatMessage(messages.submit)}
                </Button>
              </DialogActions>
            </Dialog>
            </div>
        );
    }
}

ExpenseDialog.propTypes = {
    status: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default compose(withStyles(styles), injectIntl)(ExpenseDialog);