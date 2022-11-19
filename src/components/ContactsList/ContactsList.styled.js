import styled from 'styled-components';
import {DeleteOutline} from '@styled-icons/typicons/DeleteOutline';

export const ContactsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //overflow: scroll;
`;

export const ContactsTitle = styled.h1`
  margin-top: 45px;
  margin-bottom: 20px;
  font-size: 20px;
  //background-color: #fff;
`;

export const ContactsUl = styled.ul`
  padding: 20px 0;
  height: 413px;
  width: 350px;
  overflow: scroll;
  display: flex;
  //justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const ContactsItem = styled.li`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-around;
`;

export const ContactsAvatar = styled.div`
  height: 40px;
  width: 40px;
  color: white;
  font-size: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactsSpanWrapper = styled.div`

`;

export const ContactsButton = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
`;

export const DeleteIcon = styled(DeleteOutline)`
  color: #b9b9b9;
  width: 25px;
  position: absolute;
  top: 6px;
  left: 8px;

  &:active, &:hover {
    color: red;
  }
`;

export const ContactsSpan = styled.span`
  width: 200px;
  display: block;
  font-weight: ${({type}) => type === 'number' ? 100 : 400};
`;