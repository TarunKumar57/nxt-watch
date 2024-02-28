import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Roboto;
  text-align: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  @media (max-width: 912px) {
    height: 70vh;
  }
`
export const FailureImg = styled.img`
  height: 50vh;
  @media (max-width: 912px) {
    height: 30vh;
  }
`
export const FailureHeading = styled.h1`
  margin-bottom: 0%;
`
export const FailureParagraph = styled.p`
  color: ${props => (props.isDark ? '#f1f5f9' : '#231f20')};
  @media (min-width: 600px) {
    font-size: large;
  }
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: 1px solid #4f46e5;
  border-radius: 5px;
  height: 39px;
  width: 90px;
  cursor: pointer;
  font-family: Roboto;
  @media (max-width: 600px) {
    height: 39px;
    width: 90px;
  }
`
