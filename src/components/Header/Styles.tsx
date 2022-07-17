import styled from 'styled-components';
import { PageText as NavText } from '../Helpers/PageText';
import { PageItemWrapper as NavItemWrapper } from '../Helpers/ItemWrapper';

export const Logo = styled.img`
  width: 12em;
  padding: 0.2em 0.1em;
  cursor: pointer;

  &:hover {
    filter: brightness(130%);
    -webkit-filter: brightness(130%);
    -moz-filter: brightness(130%);
    -o-filter: brightness(130%);
    -ms-filter: brightness(130%);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #ffffff;
`;

export const Text = styled(NavText)`
  color: ${props => (props.color ? props.color : '#434343')};
  font-size: ${props => (props.fontSize ? props.fontSize : '.9em')};
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
`;

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  padding: ${props => (props.padding ? props.padding : '0')};
  margin: ${props => (props.margin ? props.margin : '0')};
  background: ${props => (props.background ? props.background : 'none')};
  cursor: pointer;

  &:hover {
    filter: brightness(130%);
    -webkit-filter: brightness(130%);
    -moz-filter: brightness(130%);
    -o-filter: brightness(130%);
    -ms-filter: brightness(130%);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
