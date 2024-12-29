import styled from "styled-components";
import { colors } from "../assets/colors";
import PlusIcon from "../assets/Icons/PlusIcon";
import Link from "./Link";

const CardStyled = styled.div`
  width: 303px;
  height: 378px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.offWhite}; 
  border: 1px solid transparant;
  border-radius: 8px; 
  gap:24px;

`;

const AddCard: React.FC = () => {
    return (
        <CardStyled>
            <PlusIcon />
            <Link to="/create">Add Custom Role</Link>
        </CardStyled>
    )
}
export default AddCard
