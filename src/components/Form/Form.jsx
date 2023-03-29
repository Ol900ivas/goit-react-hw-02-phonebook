import PropTypes from 'prop-types';

import { Component } from 'react';
import { FormWrap, Input, FormBtn } from './Form.styled';

export class Form extends Component {
  state = {
    // contacts: [],
    name: '',
    // filter: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      //   <div className="main">
      //     <div className="one">
      <FormWrap>
        <h3>Phonebook</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Shridhar Deshmukh"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Input
              type="tel"
              name="number"
              id="number"
              placeholder="123-45-67"
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div>
            <FormBtn type="submit">Add contact</FormBtn>
          </div>
        </form>
      </FormWrap>
      //     </div>
      //   </div>
    );
  }
}
