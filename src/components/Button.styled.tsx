import styled from "styled-components";

type StyledBtnPropsType = {
    background: string
    textColor: string
    border: string
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  font-family: Inter,serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  background: ${props => props.background};
  color: ${props => props.textColor};
  border: ${props => props.border};;
`