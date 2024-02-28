import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  text-align: center;  @media (max-width: 600px) {
    height: 70vh;
  }
}
`

export const NotFoundImg = styled.img`
  height: 50vh;
  @media (max-width: 600px) {
    height: 25vh;
  }
`

export const NotFoundHeading = styled.h1` 
  color: ${props => (props.darkMode ? '#f9f9f9' : '#0f0f0f')};
   @media (max-width: 600px) {
    font-size: large;
  }
}
`

export const NotFoundParagraph = styled.p`
  color: ${props => (props.darkMode ? '#94a3b8' : '#64748b')};
  margin-top: 0px;
  @media (max-width: 600px) {
    font-size: small;
  }
`
