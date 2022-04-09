import { Cards } from "../Cards";
import { TransactionsTables } from "../TransactionsTables";
import { Container } from "./style";

export function Dash(){
    return (
        <Container>
            <Cards />
            <TransactionsTables />
        </Container>
    )
}