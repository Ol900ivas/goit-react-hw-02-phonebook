import { Component } from 'react';
import { Form } from './Form/Form';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],

    // filter: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

{
  /* <div class="main">
  <div class="one">
    <div class="register">
      <h3>Create your account</h3>
      <form id="reg-form">
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            spellcheck="false"
            placeholder="Shridhar Deshmukh"
          />
        </div>
        <div>
          <label for="email">Number</label>
          <input
            type="text"
            id="email"
            spellcheck="false"
            placeholder="123-45-67"
          />
        </div>

        <div>
          <button type="submit" class="button">
            Add contact
          </button>
        </div>
      </form>
    </div>
  </div>
</div>; */
}
