import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog'

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  width: '100%',
  maxWidth: '30rem',
  height: '100vh',
  padding: '4.5rem 3rem 3rem',
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray500'
})

export const DialogTitle = styled(Dialog.Title, {
  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$green100'
})

export const ProductList = styled('div', {
  marginTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  juisfyContent: 'space-between',
  gap: '1.25rem',
})

export const ProductThumbnail = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: '6.375rem',
  height: '5.8125rem',
  borderRadius: 8,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
});

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  fontSize: '$md',

  span: {
    display: 'block',
  },

  strong: {
    display: 'block',
    lineHeight: 1.6
  },

  button: {
    background: 'transparent',
    width: 'fit-content',
    fontSize: '1rem',
    color: '$green500',
    border: 0,
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }

  }
})

export const DialogFooter = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: 1.6,
  },

  button: {
    backgroundColor: '$green500',
    width: '100%',
    padding: '1.25rem',
    marginTop: '3rem',
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$white',
    lineHeight: 1.6,
    cursor: 'pointer',

    border: 0,
    borderRadius: 8,
    transition: 'background-color 0.1s',

    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})

export const TotalItems = styled('div', {
  fontSize: '$md',
  color: '$gray300'
})

export const TotalPrice = styled('div', {
  fontSize: '$md',
  fontWeight: 'bold',
  color: '$gray100',

  strong: {
    fontSize: '$xl',
  }
});