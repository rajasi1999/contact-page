import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import unicode_logo from '../unicode_logo.PNG';
import { Toolbar, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme=createMuiTheme({
        overrides: {
            MuiToolbar: {
                root: {
                    height: 114,
                    marginLeft: '9.3%'
                }
            },
            MuiTabs: {
                root: {
                    ['@media (min-width:960px)']:{
                        minWidth: 10
                    }
                }
            }
           
        }

});
class NavBar extends Component {

    styles={
        
        right: {
            flex: 1
        },
          appbar: {
              background: '#FFFFFF',
              height: 114,
              position: 'relative'
          }
          //tab: {
        //       flex="end"
        //   }
        };

        /*state = {
            value: 0,
          };
        
          handleChange = (event, value) => {
            this.setState({ value });
          };*/
        
    

    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <AppBar style={this.styles.appbar}>
            <Toolbar>
                <img src={unicode_logo} width="237" left="179" top="34"/>
                <div style={this.styles.right}></div>
                <Tabs
                //value={this.state.value}
                //onChange={this.handleChange}
                indicatorColor="primary"
                textColor="black"
                centered
                >
                
                <Tab label="HOME" />
                <Tab label="ABOUT US" />
                <Tab label="PROJECTS" />
                <Tab label="EVENTS" />
                <Tab label="BLOG" />
                <Tab label="CONTACT" />
                </Tabs>
                </Toolbar>
            </AppBar>
            </MuiThemeProvider>
                    
            
        );
    }

    
};
export default NavBar