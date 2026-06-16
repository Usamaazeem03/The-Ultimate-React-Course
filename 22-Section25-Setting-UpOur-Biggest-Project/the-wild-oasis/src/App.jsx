import Styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-50);
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Heading as="h1">Hello, World!</Heading>
        <Heading as="h2">Welcome to our app</Heading>
        <Heading as="h3">This is a subtitle</Heading>
        <Button>Click me!</Button>
        <Input placeholder="Type something..." />
      </StyledApp>
    </>
  );
}

export default App;
