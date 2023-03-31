import { Component } from 'react';
import { Wrap } from 'components/Wrap/Wrap';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Wrap>
          <ContactForm submit={this.formSubmitHandler} />
          <Contacts contacts={contacts} />
        </Wrap>
      </>
    );
  }
}
