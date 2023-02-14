import { styled } from "..";


export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  minHeight: '656px',

  display: 'flex',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.5rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minWidth: 540,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    }
  }
})

export const ProductFooter = styled('footer', {
  position: 'absolute',
  bottom: '0.5rem',
  left: '0.5rem',
  right: '0.5rem',
  padding: '1.25rem',
  borderRadius: 6,
  cursor: 'auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  strong: {
    display: 'block',
    fontSize: '$lg',
    color: '$gray100'
  },

  span: {
    marginTop: '0.25rem',
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },

  button: {
    backgroundColor: '$green300',
    color: '$white',
    lineHeight: 0,
    padding: '0.75rem',
    border: 0,
    borderRadius: 6,
    cursor: 'pointer'
  }
})