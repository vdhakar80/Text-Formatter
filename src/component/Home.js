import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Container = styled.div`
  color: green;
  width: 60%;
  text-align: center;
`;
const MyNewTextField = styled(TextField)`
  width: 50rem;
`;
const MyButton = styled(Button)``;
const Home = () => {
  const [textValue, setTextValue] = React.useState("");

  return (
    <>
      <Container>
        <h2>Enter Text Here</h2>
        <MyNewTextField
          id="standard-multiline-flexible"
          multiline
          rows={10}
          cols={20}
          variant="outlined"
          name={"mytext"}
          value={textValue}
          onChange={({ target: { value } }) => {
            setTextValue(value);
          }}
        />
        <br />
        <MyButton
          variant="contained"
          color="primary"
          className="m-2"
          onClick={() => {
            setTextValue(textValue.toUpperCase());
          }}
        >
          uppercase
        </MyButton>
        <MyButton
          variant="contained"
          color="primary"
          className="m-2"
          onClick={() => {
            setTextValue(textValue.toLowerCase());
          }}
        >
          lowercase
        </MyButton>
        <MyButton
          variant="contained"
          color="primary"
          className="m-2"
          onClick={() => {
            let newString = textValue.replace(/\s+/g, " ").trim();
            setTextValue(newString);
          }}
        >
          remove extra spaces
        </MyButton>
        <MyButton
          variant="contained"
          color="primary"
          className="m-2"
          onClick={() => {
            navigator.clipboard.writeText(textValue);
          }}
        >
          copy text
        </MyButton>
        {/* <MyButton variant="contained" color="primary" className="m-2">
          remove a word
        </MyButton>
        <MyButton variant="contained" color="primary" className="m-2">
          replace a word
        </MyButton> */}
        <MyButton
          variant="contained"
          color="primary"
          className="m-2"
          onClick={() => {
            setTextValue("");
          }}
        >
          clear
        </MyButton>
      </Container>
    </>
  );
};

export default Home;
