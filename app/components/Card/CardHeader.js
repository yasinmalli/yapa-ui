import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    cardHeader: {
        padding: "0.75rem 1.25rem",
        marginBottom: "0",
        borderBottom: "none",
        background: "transparent",
        zIndex: "3 !important",
        /*"&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
          margin: "0 15px",
          padding: "0",
          position: "relative",
          color: "#FFFFFF"
        },
        "&:first-child": {
          borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
        },
        /*"&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
          "&:not($cardHeaderIcon)": {
            borderRadius: "3px",
            marginTop: "-20px",
            padding: "15px"
          }
        },
        "&$cardHeaderStats svg": {
          fontSize: "36px",
          lineHeight: "56px",
          textAlign: "center",
          width: "36px",
          height: "36px",
          margin: "10px 10px 4px"
        },
        "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
          fontSize: "36px",
          lineHeight: "56px",
          width: "56px",
          height: "56px",
          textAlign: "center",
          overflow: "unset",
          marginBottom: "1px"
        },
        "&$cardHeaderStats$cardHeaderIcon": {
          textAlign: "right"
        },*/
        background: "linear-gradient(60deg, #ffa726, #fb8c00)",
        boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    }
};

class CardHeader extends React.PureComponent {
    render() {
        const { children, classes, ...rest } = this.props;

        return (
            <div className={classes.cardHeader} {...rest}>
                {children}
            </div>
        )
    }
}

CardHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
      ])
};

export default withStyles(styles)(CardHeader);