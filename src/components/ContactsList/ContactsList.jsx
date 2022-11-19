import {Filter} from '../Filter/Filter';
import {
  ContactsAvatar,
  ContactsButton,
  ContactsItem,
  ContactsListWrapper,
  ContactsSpan,
  ContactsSpanWrapper,
  ContactsTitle,
  ContactsUl,
  DeleteIcon
} from './ContactsList.styled';
import PropTypes from 'prop-types';
import {Notification} from '../Notification/Notification';

export function ContactsList({handleFilter, contacts, deleteUser}) {

  const avatarCreator = (props) => {
    const name = props;
    let initials = '';
    const nameSplit = name.split(' ');
    if (nameSplit.length > 1) {
      initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
      return initials;
    } else {
      initials = nameSplit[0].charAt(0).toUpperCase();
      return initials;
    }
  };

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  return (
    <ContactsListWrapper>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter handleFilter={handleFilter}/>
      {contacts.length !== 0 ?
        <ContactsUl>
          {contacts.map(c => {
            return <ContactsItem key={c.id}>
              <ContactsAvatar style={{backgroundColor: getRandomHexColor()}}>{avatarCreator(c.name)}</ContactsAvatar>
              <ContactsSpanWrapper>
                <ContactsSpan type={'name'}>{c.name}</ContactsSpan>
                <ContactsSpan type={'number'}>{c.number}</ContactsSpan>
              </ContactsSpanWrapper>
              <ContactsButton id={c.id} onClick={deleteUser}><DeleteIcon/></ContactsButton>
            </ContactsItem>;
          })}
        </ContactsUl>
        : <Notification message="There is no contacts"/>}
    </ContactsListWrapper>
  )
    ;
}

ContactsList.propTypes = {
  handleFilter: PropTypes.func,
  deleteUser: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  })).isRequired,
};