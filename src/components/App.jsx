import { Component } from 'react';
import { Wrap } from './Wrap/Wrap';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],

    // filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Wrap>
          <ContactForm submit={this.formSubmitHandler} />
          {/* <Contacts /> */}
        </Wrap>
      </>
    );
  }
}
