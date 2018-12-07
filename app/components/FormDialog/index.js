import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import { getIntl } from '../../utils/localizations';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, 
    FormControl, InputLabel, OutlinedInput, MenuItem,
    Select } 
from '@material-ui/core';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    }    
  });

class FormDialog extends React.Component {  
  render() {      
    const { classes } = this.props;
    const intl = getIntl();

    return (
      <div>        
        <Dialog open={this.props.status} onClose={this.props.onClose}>
            <DialogTitle id="form-dialog-title">{this.props.intl.formatMessage(messages.title)}</DialogTitle>
            <DialogContent>
                <form className={classes.root} noValidate autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-age-simple">
                            {this.props.intl.formatMessage(messages.category)}
                        </InputLabel>
                        <Select value={10} onChange={this.handleChange}
                                input={
                                <OutlinedInput
                                    labelWidth={49}
                                    name="age"
                                    id="outlined-age-simple"
                                />
                                }>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>                    
                </form>                
            </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
                {this.props.intl.formatMessage(messages.cancel)}
            </Button>
            <Button onClick={this.props.onSubmit} color="primary">
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

