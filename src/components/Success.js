// Used extension - type in RCE plus tab to build out the scaffolding for react component
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    // continue method - prevent default from clearing the information
    // pass in the props from the previous step or inputs
    continue = e => {
        e.preventDefault();
        // Process FORM // - this is where the backend method is typically
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    
    render() {
        // the values are props from the user form
        // pull the values from the props (the hard information)
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    {/* what is a fragment - see below */}
                <AppBar title="Success "/>
                <h1>Thank you for your submission</h1>
                <p> Email will follow with login information</p>
                </React.Fragment>

            </MuiThemeProvider>
        )
    }
}


export default Success;

// A common pattern in React is for a component to return multiple elements. 
// Fragments let you group a list of children without adding extra nodes to the DOM.
// A simple way to group elements without adding any extra markup
// no reason to build out a appbar component
