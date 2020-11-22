import styled from "styled-components";

export const ListAutoSuggest = styled.ul`
  border: 1px solid ${(props) => props.theme.colors.neutralGrayLight};
  background: white;
  border-radius: 4px;
  max-height: 22rem;
  position: relative;
  overflow: auto;

  > li {
    height: 4.2rem;
    line-height: 4.2rem;
    padding: 0 1.6rem;
    font-size: 1.6rem;
    font-weight: normal;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.neutralGrayLightest};
    }
  }
`;
