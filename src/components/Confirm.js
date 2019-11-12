// Used extension - type in RCE plus tab to build out the scaffolding for react component
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
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
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    {/* what is a fragment - see below */}
                <AppBar title="Confirm User Data "/>
                <List>
                    <ListItem
                    primaryText="First Name"
                    secondaryText={ firstName }
                    />
                    <ListItem
                    primaryText="Last Name"
                    secondaryText={ lastName }
                    />
                    <ListItem
                    primaryText="Email"
                    secondaryText={ email }
                    />
                    <ListItem
                    primaryText="Occupation"
                    secondaryText={ occupation }
                    />
                    <ListItem
                    primaryText="City"
                    secondaryText={ city }
                    />
                    <ListItem
                    primaryText="Bio"
                    secondaryText={ bio }
                    />
                </List>
                <br/>

                <RaisedButton
                label="Confirm & Continue"
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

export default Confirm;

// A common pattern in React is for a component to return multiple elements. 
// Fragments let you group a list of children without adding extra nodes to the DOM.
// A simple way to group elements without adding any extra markup
// no reason to build out a appbar component
