import { styled } from "@stitches/react";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '-1rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: 140,
  maxHeight: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  marginBottom: '4rem',
  marginLeft: '-3.25rem',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
})