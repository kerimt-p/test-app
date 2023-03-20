import styled from '@emotion/styled'
import {TextInput as _TextInput, TextInputProps as _TextInputProps} from "@mantine/core";

interface TextInputStyled {
    shade: number
}

export const TextInput = styled(_TextInput)<TextInputStyled & _TextInputProps>`
  background: ${({theme, shade}) => {
      if (theme.colorScheme === 'dark') return theme.colors.producterBlue[shade];
      return theme.colors.producterBlue[shade];
  }};
  padding: 40px;
  
  
  & .producter-TextInput-error {
    color: red;
    font-size: 13px;
    font-weight: 700;
  }
`

TextInput.defaultProps = {
    shade: 8
}