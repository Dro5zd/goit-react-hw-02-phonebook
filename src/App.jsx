import {Component} from 'react';
import {BatteryIcon, Iphone, ReceptionIcon, Time, WifiIcon} from './App.styled';
import {ContactsList} from './components/ContactsList/ContactsList';
import {ContactForm} from './components/ContactForm/ContactForm';
import {nanoid} from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  componentDidMount() {
    const localData = localStorage.getItem('contacts')
    localData && this.setState({contacts: JSON.parse(localData)});
  }

  componentDidUpdate(prevProps, prevState, _) {
    if (prevState.contacts.length !== this.state.contacts.length){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts) )
    }
  }

  addContact = (name, number) => {
    if (!this.state.contacts.map(name => name.name).includes(name)){
      this.setState(prevState => ({
        contacts: [...prevState.contacts, {id: nanoid(), name: name, number: number}]
      }) )
    } else alert(`${name} is already in contacts`)
  }

  handleFilter = (e)=> {
    const value = e.currentTarget.value;
    this.setState({ filter: value.toLowerCase()});
  }

  filterState = () => {
    return this.state.contacts.filter(f => f.name.toLowerCase().includes(this.state.filter))
  }

  deleteUser = (e) => {
    this.setState({ contacts: this.state.contacts.filter(d => d.id !== e.currentTarget.id)});
  }

  render() {
    return (
      <Iphone>
        <i>Speaker</i>
        <b>Camera</b>
        <Time>10:56</Time>
        <BatteryIcon/>
        <WifiIcon/>
        <ReceptionIcon/>
        <ContactForm addContact={this.addContact}/>
        <ContactsList handleFilter={this.handleFilter} deleteUser={this.deleteUser} contacts={this.filterState()}/>
      </Iphone>
    );
  }
}
