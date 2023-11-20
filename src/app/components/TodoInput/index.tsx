import React from 'react';
import styled from 'styled-components';
import Styled from 'styled-components';

const Box = Styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  witdh: 100%auto;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100;
  border: none;
  outline: 0;
`;
export default function TodoInput() {
  return (
    <Box>
      <Input placeholder="Please write Todo" />
    </Box>
  );
}