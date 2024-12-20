import styled from "styled-components";
import ContactButton from "./Button";

const Contact = () => {
  return (
    <Container>
      <Header>Contact</Header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        consequuntur modi voluptate delectus eum architecto dicta autem
        temporibus nostrum suscipit, quisquam debitis, quae aliquid nemo
        deserunt eaque blanditiis dignissimos perferendis!
      </p>

      <ContactButton />
    </Container>
  );
};

const Container = styled.div`
  background-color: cyan;
`;

const Header = styled.div`
  padding: 10px 20px;
  text-align: center;
  color: red;
`;
export default Contact;
