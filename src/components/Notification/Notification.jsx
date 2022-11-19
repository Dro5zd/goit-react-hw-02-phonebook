import * as PropTypes from 'prop-types';
import {ContactsWrapper} from './Notification.styled';

export function Notification({message}) {
  return <ContactsWrapper>
    <p>{message}</p>
  </ContactsWrapper>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};