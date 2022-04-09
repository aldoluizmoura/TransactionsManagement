import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
  
    table{
        width: 100%;

        button{
            border: none;            
        }
        

        th{
            text-align: left;
            font-weight: 400;
            line-height: 1.5rem;
            padding:1rem 2rem;
        }
        
        td{
            padding:1rem 2rem;
            border: 0;
            background: var(--shape);
            color:var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.withdraw{
                color: var(--red);
            }

            &.deposit{
                color: var(--green);
            }


        }
       
    }
`;