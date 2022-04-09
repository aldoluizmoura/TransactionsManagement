import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { TransactionContext } from "../../../TransactionsContexts";
import { Container, RadioButton, TransactionTypeContainer } from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) { 
const {createTransaction} = useContext(TransactionContext)

const [title, setTitle] = useState('');
const [amount, setAmount] = useState(0);
const [category, setCategory] = useState('');
const [type, setType] = useState('');


async function handleNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({title, amount, category, type});
  
    setTitle('');
    setCategory('');
    setType('deposit');
    setAmount(0);    
    onRequestClose();    
}


  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          X
        </button>
     
          <Container>
          
            <h2>Cadastrar transação</h2>
            
            <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)} />
            <input placeholder="Valor" value={amount} onChange={event =>  setAmount(Number(event.target.value))}/>

            <TransactionTypeContainer>

                <RadioButton type="button" onClick={() => setType('deposit')} 
                             isActive={type =='deposit'} activeColor="green">
                    <span>Entrada</span>
                </RadioButton>

                <RadioButton type="button" onClick={() => setType('withdraw')} 
                             isActive={type=='withdraw'} activeColor="red">
                    <span>Saída</span>
                </RadioButton>

            </TransactionTypeContainer>

            <input placeholder="Categoria" value={category} onChange={event =>  setCategory(event.target.value)}/>

             <button type="submit" onClick={handleNewTransaction}>Cadastrar</button>   

          </Container>
       
      </Modal>
    </>
  );
}


