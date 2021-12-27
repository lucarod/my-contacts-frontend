import { Link } from 'react-router-dom';

// import Modal from '../../components/Modal';
// import Loader from '../../components/Loader';

import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import pencil from '../../assets/images/icons/pencil.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      {/* <Modal danger /> */}
      {/* <Loader /> */}

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Luca Rodrigues</strong>
              <small>Instagram</small>
            </div>
            <span>luca12rodrigues@gmail.com</span>
            <span>(53 99173-5015)</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={pencil} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
