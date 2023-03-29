import styled from '@emotion/styled';

export const FormWrap = styled.div`
  width: 500px;
  margin: 40px auto;
  padding: 10px;
  border: 7px solid #72b372;
  border-radius: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #444;
  background-color: #f0f0f0;
  box-shadow: 0 0 20px 0 #000000;
`;

export const FormBtn = styled.button`
  font-size: 1em;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #59b969;
  box-shadow: 0 1px 0 0 #60bd49 inset;
  background-image: linear-gradient(to bottom, #63e651, #42753e);
  :hover {
    background-image: linear-gradient(to bottom, #51db1c, #6ba061);
  }
`;

export const Input = styled.input`
  width: 65%;
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
  padding: 5px;
  font-size: 0.9em;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.07);
  :hover {
     background: #ffffff;
}
  }
`;
