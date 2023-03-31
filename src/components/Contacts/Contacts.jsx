import PropTypes from 'prop-types';

import { ContactItem } from '../ContactItem/ContactItem';
import { TitleH2 } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  return (
    <>
      <TitleH2>Contacts</TitleH2>
      <ul>
        {contacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </ul>
    </>
  );
};
