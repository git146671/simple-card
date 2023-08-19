import styled from "styled-components";
import ImageDesert from '../pictures/desert.png';

export const ImageStyled = styled.img`
  width: 280px;
  height: 170px;
  flex-shrink: 0;
  margin: 10px;
  border-radius: 10px;
  background: lightgray 50%;
`

ImageStyled.defaultProps = {
    src: ImageDesert,
};