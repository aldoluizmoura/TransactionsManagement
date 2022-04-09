import { Container } from "./style";
import { useContext } from "react";
import trashImg from '../../assets/images/trash.png'
import { TransactionContext } from "../../TransactionsContexts";


export function TransactionsTables() {
  const {transactions} = useContext(TransactionContext);
  const {deleteTransaction} = useContext(TransactionContext);

  async function handleDeleteTransaction(id: number){
    await deleteTransaction(id);
  }
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Criado em</th>
          </tr>
        </thead>

        <tbody>
           {transactions.map((transaction) => {
             return ( 
              <tr key={transaction.id} >

              <td>{transaction.title}</td>

              <td className={transaction.type}>
                          {new Intl.NumberFormat("pt-BR",{
                            style: "currency",
                            currency: "BRL"
                          }).format(Number(transaction.amount))}
              </td>

              <td>{transaction.category}</td>

              <td>{new Intl.DateTimeFormat("pt-Br",{}).
                      format(new Date(transaction.createdAt))}
              </td>
              <td><button type="submit" 
                          onClick={()=> handleDeleteTransaction(transaction.id)}>
                          <img src={trashImg} />
                   </button>
              </td>
              
            </tr>)
           })}
          
        </tbody>
      </table>
    </Container>
  );
}
