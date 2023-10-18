import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Header({
  hasError,
  contactsSize,
  filteredContactsSize,
}) {
  // eslint-disable-next-line no-nested-ternary
  const alignment = hasError
    ? 'flex-end'
    : (
      contactsSize > 0 ? 'space-between' : 'center'
    );

  return (
    <Container justifyContent={alignment}>
      {(!!contactsSize && !hasError) && (
        <strong>
          {filteredContactsSize}
          {filteredContactsSize === 1 ? ' contato' : ' contatos'}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  contactsSize: PropTypes.number.isRequired,
  filteredContactsSize: PropTypes.number.isRequired,
};
