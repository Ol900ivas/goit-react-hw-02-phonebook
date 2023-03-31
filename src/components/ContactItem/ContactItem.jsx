import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';

export const ContactItem = ({ contact }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
        <button>
          <RxCross2 size="20px" />
        </button>
      </p>
    </li>
  );
};
