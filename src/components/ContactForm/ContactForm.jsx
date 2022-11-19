import {
  ContactFormButton,
  ContactFormLabel,
  ContactFormTitle,
  ContactFormWrapper,
  Input,
  PhoneIcon,
  UserIcon
} from './ContactForm.styled';
import {Component} from 'react';

const INITIAL_STATE = {
  name: '',
  number: ''
};

export class ContactForm extends Component {
  state = {...INITIAL_STATE};

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number)
    this.resetForm();
  };

  resetForm() {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number} = this.state;
    return (
      <div>
        <ContactFormTitle>Phonebook</ContactFormTitle>
        <ContactFormWrapper onSubmit={this.handleSubmit}>
          <ContactFormLabel>
            <UserIcon/>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactFormLabel>
          <ContactFormLabel>
            <PhoneIcon/>
            <Input
              type="tel"
              name="number"
              value={number}
              placeholder="Number"
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactFormLabel>
          <ContactFormButton type="submit">Add contact</ContactFormButton>
        </ContactFormWrapper>
      </div>
    );
  }
}