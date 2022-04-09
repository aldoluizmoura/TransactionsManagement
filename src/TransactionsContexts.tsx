import { createContext, ReactNode, useEffect, useState } from "react";
import { requestApi } from "./services/ApiRequestService";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInputs) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
}

type TransactionInputs = Omit<Transaction, "id" | "createdAt">;

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    requestApi.get("/list").then((response) => {
      setTransactions(response.data);
    });
  }, []);

 async function createTransaction(props: TransactionInputs) {
    
    const response = await requestApi.post("/insert",{...props}); 
    setTransactions([...transactions, response.data]);
  }

 async function deleteTransaction(id: number) {
    
    await requestApi.delete("delete/"+id); 
    
    await requestApi.get("list").then((response)=> {
      setTransactions(response.data)
    });
    
    console.log(transactions)
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction, deleteTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
}
