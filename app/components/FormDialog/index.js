import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import { Button, Dialog, DialogActions, DialogContent, 
    DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } 
from '@material-ui/core';

const styles = theme => ({
});

class FormDialog extends React.Component { 
  
  state = {
    price: 0,
    category: ''          
  }
  

  handleChange = name => event => {    
    this.setState({[name]: event.target.value});    
  };

  onSubmit = () => {    
    this.props.addExpense({price: this.state.price, category: this.state.category});
  };

  render() {      
    const categories = this.props.categories.map(
        (category) => { 
            return <MenuItem key={category.value} value={category.value}>{category.label}</MenuItem>
        }
    )
    
    return (
      <div>        
        <Dialog open={this.props.status} onClose={this.props.onClose}>
            <DialogTitle id="form-dialog-title">{this.props.intl.formatMessage(messages.title)}</DialogTitle>
            <DialogContent>
                <form noValidate autoComplete="off">
                    <FormControl fullWidth margin="dense">
                        <TextField autoFocus margin="dense" id="name" label="Price (CAD)" type="number" fullWidth
                        value={this.state.price} onChange={this.handleChange('price')}/>
                    </FormControl>                    
                    <FormControl fullWidth margin="dense">
                        <InputLabel htmlFor="expense-main-category">Main Category</InputLabel>
                        <Select value={this.state.category} 
                            onChange={this.handleChange('category')}
                            margin="dense"
                            inputProps={{ name: 'main-category', id: 'expense-main-category' }}>                            
                            
                            {categories}                            
                        </Select>                        
                    </FormControl>
                    <FormControl fullWidth margin="dense">
                        <InputLabel htmlFor="expense-sub-category">SubCategory</InputLabel>
                        <Select value={this.state.category} 
                            onChange={this.handleChange('category')}
                            margin="dense"
                            inputProps={{ name: 'sub-category', id: 'expense-sub-category' }}>                            
                            
                            {categories}                            
                        </Select>                        
                    </FormControl>                    
                </form>            
            </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
                {this.props.intl.formatMessage(messages.cancel)}
            </Button>
            <Button onClick={this.onSubmit} color="primary">
                {this.props.intl.formatMessage(messages.submit)}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

FormDialog.propTypes = {
    status: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default compose(withStyles(styles), injectIntl)(FormDialog);

