import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import arrow from '../../../../assets/images/icons/arrow.svg';
import pencil from '../../../../assets/images/icons/pencil.svg';
import trash from '../../../../assets/images/icons/trash.svg';

import { ListHeader, Card } from './styles';

export default function ContactsList({
  contacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {!!contacts.length && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={onToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && <small>{contact.category.name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={pencil} alt="Edit" />
            </Link>
            <button
              type="button"
              onClick={() => onDeleteContact(contact)}
            >
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      ))}
    </>

  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
