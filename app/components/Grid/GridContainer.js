import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';

const styles = {
    grid: {
        margin: "0 -15px !important",
        width: "unset"  
    }
}

class GridContainer extends React.PureComponent {
    render() {
        const { classes, children, ...rest } = this.props;
        return (
            <Grid container {...rest} className={classes.grid}>
                {children}
            </Grid>
        );
    }
}

GridContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GridContainer);