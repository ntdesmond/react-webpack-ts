import styled from 'styled-components';
import SomeIcon from '../components/SomeIcon';

const BodyGrid = styled.div`
  height: 100%;
  text-align: center;
  display: grid;
  grid-template:
    "header" 2em
    "main" auto
    "footer" 2em;
`;

const StyledMain = styled.main`
  background-color: rgba(128, 128, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <BodyGrid>
    <header>
      Web application template
    </header>
    <StyledMain>
      <div>Hello world</div>
      <SomeIcon />
    </StyledMain>
    <footer>
      Source code available at GitHub!
    </footer>
  </BodyGrid>
);
