import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
};

class CardBody extends React.PureComponent {
    render() {
        const { children, classes, ...rest } = this.props;

        return (
            <div className={classes.cardBody} {...rest}>
                {children}
            </div>
        )
    }
}

CardBody.propTypes = {
    classes: PropTypes.object.isRequired,    
};

export default withStyles(styles)(CardBody);