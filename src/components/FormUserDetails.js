// Used extension - type in RCE plus tab to build out the scaffolding for react component
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    // continue method - prevent default from clearing the information
    // pass in the props from the previous step or inputs
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        // the values are props from the user form
        // pull the values from the props (the hard information)
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    {/* what is a fragment - see below */}
                <AppBar title="Enter User Details"/>
                <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    
                />
                <br/>

                <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    
                />

                <br/>

                <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    
                />

                <br/>

                <RaisedButton
                label="Continue"
                primary={true}
                styles={styles.button}
                onClick={this.continue}
                />
                </React.Fragment>

            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;

// A common pattern in React is for a component to return multiple elements. 
// Fragments let you group a list of children without adding extra nodes to the DOM.
// A simple way to group elements without adding any extra markup
// no reason to build out a appbar component
