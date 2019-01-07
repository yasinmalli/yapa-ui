import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';

const styles = {
    grid: {
        padding: "0 15px !important"
    }
};
  
class GridItem extends React.PureComponent {
    render() {
        const { classes, children, ...rest } = this.props;
        return (
            <Grid item {...rest} className={classes.grid}>
                {children}
            </Grid>
        );
    }
}

GridItem.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GridItem);