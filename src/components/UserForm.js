// created using the extension ES7 React/Redux/GraphQL/React-Native snippets.  This allows you to build out the
// scaffolding for a React Component by just entering RCE and tab

import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    // Proceed to next step method 
    // Why the fat arrow below?  The fat arrow is used to define anonymous functions
    // The binding of -this- is the same outside and inside the function.  No need to label the function
    // Fat arrow functions doesn't have an argument object defined. 
    nextStep = () => {
        // step constant is the first form in the multi form series
        // destructuring the step constant and setting new state
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
// Go back to the previous step
    prevStep = () => {
        // step constant is the first form in the multi form series
        // destructuring the step constant and setting new state
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle field changes - edit input will change state
    // take the input and set it to the value of the event perimeter (first name, last name,ert.)
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        // pull step out of the state - pull out the field information and set the state to the new inputs
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        // pass the values into each components based on the input and render the inputs
        const values = { firstName, lastName, email, occupation, city, bio };
        
        switch (step) {
            case 1:
                return (
                    // this is passing the values to the next component
                <FormUserDetails 
                // here are the props and call the nextStep method
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );

            case 2:
            return (
            // this is passing the values to the next component
              <FormPersonalDetails 
            // here are the props and call the nextStep and prevStep method
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values={values}
            />
            );

             case 3: 
             return (
                // this is passing the values to the next component
                  <Confirm 
                // here are the props and call the nextStep and prevStep method
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 values={values}
                />
                );

              case 4: 
              return (
                // this is passing the values to the next component
                  <Success/>
                );
        }
    }
}

export default UserForm;

// Switch Information :
// This is a controlled component that 
// requires an onValueChange callback that 
// updates the value prop in order for the component 
// to reflect user actions. If the value prop is not updated, 
// the component will continue to 
// render the supplied value prop instead of the expected 
// result of any user actions
