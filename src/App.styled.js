import styled from 'styled-components';
import {BatteryFull} from '@styled-icons/bootstrap/BatteryFull';
import {Wifi} from '@styled-icons/material/Wifi';
import {Reception4} from '@styled-icons/bootstrap/Reception4';


export const BatteryIcon = styled(BatteryFull)`
  right: 17px;
  top: 11px;
  width: 24px;
  position: absolute;
`;

export const WifiIcon = styled(Wifi)`
  right: 44px;
  top: 13px;
  width: 19px;
  position: absolute;
`;

export const ReceptionIcon = styled(Reception4)`
  right: 66px;
  top: 15px;
  width: 16px;
  position: absolute;
`;

export const Time = styled.div`
  width: 100px;
  font-size: 16px;
  left: 25px;
  top: 13px;
  position: absolute;
`

export const Iphone = styled.div`
  position: relative;
  margin: 80px auto 0 auto;
  width: 360px;
  height: 780px;
  //background-color: #7371ee;
  background-color: #ffffff;
  //background-image: linear-gradient(60deg, #7371ee 1%, #a1d9d6 100%);
  border-radius: 40px;
  box-shadow: 0 0 0 11px #1f1f1f, 0 0 0 13px #191919, 0 0 0 20px #111;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }

  &:before {
    top: 0;
    width: 56%;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 0 0 40px 40px;
  }

  i,
  b,
  s{
    position: absolute;
    display: block;
    color: transparent;
  }

  i {
    top: 0;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  }

  b {
    left: 10%;
    top: 0;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #101010;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);

    &:after {
      content: '';
      position: absolute;
      background-color: #2d4d76;
      width: 6px;
      height: 6px;
      top: 2px;
      left: 2px;
      top: 3px;
      left: 3px;
      display: block;
      border-radius: 4px;
      box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
    }
  }

  s {
    top: 50px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    width: 100%;
    font-size: 70px;
    font-weight: 100;
    padding-top: 60px;
  }

  //span {
  //  bottom: 50px;
  //  width: 40px;
  //  height: 40px;
  //  background-color: rgba(0, 0, 0, 0.3);
  //  border-radius: 50%;
  //  left: 30px;
  //
  //  & + span {
  //    left: auto;
  //    right: 30px;
  //  }
  //}
`;