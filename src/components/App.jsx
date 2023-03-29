import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    // filter: '',
    number: '',
  };

  handleInputChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Name
            <input
              type="text"
              name={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </form>
      </div>
    );
  }
}
