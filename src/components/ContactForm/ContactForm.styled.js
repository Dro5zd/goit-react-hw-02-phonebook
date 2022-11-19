import styled from 'styled-components';
import {Phone} from '@styled-icons/heroicons-solid/Phone';
import {User} from '@styled-icons/heroicons-outline/User';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

`;

export const ContactFormLabel = styled.label`

  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContactFormTitle = styled.h2`
  //height: 100px;
  text-align: center;
  margin-top: 45px;
  margin-bottom: 20px;
  font-size: 20px;
  //background-color: #fff;
`;

export const ContactFormButton = styled.button`
  transition: background-color 0.3s, box-shadow 0.3s;
  padding: 12px 16px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  color: #757575;
  font-size: 14px;
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  margin: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  width: 310px;
  padding: 8px 30px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  //border-radius: 10px;
  border-bottom: grey 1px solid;

  &:focus {
    outline: none;
    border-bottom: grey 2px solid;
  }
`;

export const PhoneIcon = styled(Phone)`
  color: grey;
  width: 20px;
  position: absolute;
  top: 6px;
  left: 5px;
`;

export const UserIcon = styled(User)`
  color: grey;
  width: 20px;
  position: absolute;
  top: 6px;
  left: 5px;
`;