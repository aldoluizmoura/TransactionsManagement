import incomeImg from  '../../assets/images/profits.png'
import totalImg from  '../../assets/images/growth.png'
import outcomeImg from  '../../assets/images/outcome.png'

import { Container } from "./style";
import { useContext } from 'react';
import { TransactionContext } from '../../TransactionsContexts';



export function Cards(){
    const {transactions} = useContext(TransactionContext)

    const dataSummary =  transactions.reduce(
        (acc, transaction)=>{
            
            if(transaction.type == 'deposit'){
                acc.deposits += transaction.amount
                acc.receita += transaction.amount
            }
            else{
                acc.witdraw += transaction.amount
                acc.receita -= transaction.amount
            }

            return acc;
    },
    {
        deposits: 0,
        witdraw: 0,
        receita:0
    }
    );
    

    return (
        <>
           <Container>
                <div className='hightlight-background-entrada'>
                    <header>
                        Entradas
                        <img src={incomeImg} alt="entradas"/>                        
                    </header>
                    <strong>
                        { new Intl.NumberFormat('pt-BR', {
                        style: "currency",
                        currency: "BRL"
                        }).format(dataSummary.deposits) }
                    </strong>
                </div>
                <div className='hightlight-background-saida'>
                    <header>
                        Saídas
                        <img src={outcomeImg} alt="saídas"/>
                    </header>
                    <strong>
                        { new Intl.NumberFormat('pt-BR', {
                        style: "currency",
                        currency: "BRL"
                        }).format(dataSummary.witdraw) }
                    </strong>
                </div>
                <div>
                    <header>
                        Receita
                        <img src={totalImg} alt="receita"/>
                    </header>
                    <strong>
                        { new Intl.NumberFormat('pt-BR', {
                        style: "currency",
                        currency: "BRL"
                        }).format(dataSummary.receita) }
                    </strong>
                </div>
           </Container>
        </>
    );
}