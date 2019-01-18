import React, { Component } from 'react';
import telephone from '../contact-with-text.png';
import '../App.css';

class Image extends Component{
    styles={
        text1: {
            position: "absolute",
            top: 29,
            left: "9.06%",
            fontSize: 230,
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            opacity: 0.25,
            color: "#FFFFFF",
          },
          text2: {
            position: "absolute",
            top: 165.1,
            left: "38.65%",
            color: "#454545",
            fontSize: 74,
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 600,
          
          },
          
            image: {
            position: "relative",
            marginTop: 114
            
            }

          
    };
    
    render() {
        return(
            <div style={this.styles.image}>
            <img src={telephone} />
            
            </div>
    
        );
    }
        }
        export default Image;