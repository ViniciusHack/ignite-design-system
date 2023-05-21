import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  boxSizing: 'border-box',
  borderRadius: '$sm',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontSize: '$sm',
  color: '$gray400',
  fontFamily: '$default',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontSize: '$sm',
  color: '$white',
  fontFamily: '$default',
  fontWeight: 'regular',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
