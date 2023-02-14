import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ShoppingCartButton = styled('button', {
  backgroundColor: '$gray800',
  padding: '0.75rem',
  cursor: 'pointer',
  border: 0,
  borderRadius: 6,
  color: '$gray500',
  position: 'relative',
  lineHeight: 0,

  '&:hover': {
    color: '$gray300'
  },

  span: {
    backgroundColor: '$green500',
    width: 24,
    height: 24,
    right: -7,
    top: -7,
    position: 'absolute',
    borderRadius: '50%',
    border: '3px solid $gray900',

    color: '$white',
    fontSize: '$sm',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
