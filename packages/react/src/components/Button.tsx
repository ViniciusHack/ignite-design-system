import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',

  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  minWidth: 120,
  boxSizing: 'border-box',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',
      },
      tertiary: {
        color: '$gray100',
        border: '0',
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 44,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
