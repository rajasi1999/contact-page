import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import telephone from './contact-with-text.png';
import Follow from './components/Follow.js';
import RegCard from './components/ContactForm.js';
import Footer from './components/footer';
import NavBar from './components/NavBar.js';
class MyApp extends Component {
    state = {  }

    styles={
        background:{
          background: "#F8F8F8"
        },
        image: {
            padding: "0px 0px 0px 0px"
        }
      }
    render() { 
        return ( 
            <div style={this.styles.background}>
                <Grid
                container
                spacing={24}
                direcion="row"
                justify="center"
                
                >
                <Grid item xs={12} style={this.styles.image} >
                    <NavBar />
                </Grid>
                    <Grid item xs={12} style={this.styles.image} >
                    <img src={telephone}  width="100%" />
                    </Grid>
                     <Grid item xs={7}>
                     {/* <Grid container direction="row"
                        justify="center"
                        > */}
                        {/* <Grid item> */}
                        <Follow />
                        </Grid>
                        {/* </Grid>  */}
                        {/* </Grid> */}

                    {/* <Grid item>
                        <Grid container
                        direcion="row"
                        //justify="center"
                        >
                                <Grid item>
                                    <RegCard />
                                </Grid>
                        </Grid>
                    </Grid> */}

                    <Grid item xs={7}>
                        <RegCard />
                    </Grid>
                    {/* <Grid item>
                        <Footer />
                    </Grid> */}
                    
                     <Grid item xs={12}>
                    <Footer />
                    </Grid> 

                </Grid>
                
            </div>
         );
    }
}
 
export default MyApp;