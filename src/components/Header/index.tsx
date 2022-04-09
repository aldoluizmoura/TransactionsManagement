import logoImg  from '../../assets/images/icon_header.png'
import { Container, Content } from './style';

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="controle de transações financeiras 2022" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  );
}

