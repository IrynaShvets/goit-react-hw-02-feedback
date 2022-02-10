import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.17;
  color: #fff;
  margin-bottom: 50px;
  text-shadow: 5px 6px 4px #000;

  &:hover {
    color: #04270f;
    text-shadow: 0 2px 1px #0a5822, 0 5px 4px #0af852, 0 11px 8px #36fc71,
      0 20px 15px #5efa8d;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;
