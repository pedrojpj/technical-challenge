import styled from "styled-components";

export const InputContainer = styled.div`
  width: auto;
  height: 4.8rem;
  border: 1px solid ${(props) => props.theme.colors.neutralGrayLight};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.neutralGray};
  font-size: 1.6rem;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.neutralGray};
    background: ${(props) => props.theme.colors.neutralGrayLightest};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.habitissimoPrimary};
    box-shadow: 0px 0px 8px rgba(255, 115, 0, 0.2);

    path {
      stroke: ${(props) => props.theme.colors.habitissimoPrimary};
    }
  }

  > input {
    border: 0;
    width: 100%;
    height: 100%;
    outline: none;
    flex: 1;
  }
`;

export const InputIcon = styled.span`
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputLabel = styled.label`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: ${(props) => props.theme.colors.neutralGrayDarkest};
  text-align: left;
  display: block;
  padding-bottom: 0.8rem;
`;
