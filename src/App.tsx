import { useState } from "react";
import { Dash } from "./components/Dash";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/Modals/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { TransactionProvider } from "./TransactionsContexts";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function handleOpenNewModelTransactionModel() {
    setModelIsOpen(true);
  }

  function handleCloseNewModelTransactionModel() {
    setModelIsOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewModelTransactionModel} />
      <Dash />

      <NewTransactionModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseNewModelTransactionModel}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
