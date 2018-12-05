
import React from 'react';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';

const Root = styled.div`
    display: 'flex'
`;


class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
    }
    
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };        
  
    render() {
        return (
            <Root>
                <CssBaseline />
                <IconButton
              color="inherit"
              aria-label="Open drawer"              
            >
              <MenuIcon />
            </IconButton>
            </Root>
          );
    }
}

HomePage.propTypes = {
	intl: intlShape.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default injectIntl(HomePage);