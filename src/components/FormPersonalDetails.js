// Used extension - type in RCE plus tab to build out the scaffolding for react component
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    // continue method - prevent default from clearing the information
    // pass in the props from the previous step or inputs
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        // the values are props from the user form
        // pull the values from the props (the hard information)
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    {/* what is a fragment - see below */}
                <AppBar title="Enter Personal Details"/>
                <TextField
                    hintText="Enter Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                    
                />
                <br/>

                <TextField
                    hintText="Enter Your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                    
                />

                <br/>

                <TextField
                    hintText="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                    
                />

                <br/>

                <RaisedButton
                label="Continue"
                primary={true}
                styles={styles.button}
                onClick={this.continue}

                />

                <RaisedButton
                label="Back"
                primary={false}
                styles={styles.button}
                onClick={this.back}
                
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

export default FormPersonalDetails;

// A common pattern in React is for a component to return multiple elements. 
// Fragments let you group a list of children without adding extra nodes to the DOM.
// A simple way to group elements without adding any extra markup
// no reason to build out a appbar component
