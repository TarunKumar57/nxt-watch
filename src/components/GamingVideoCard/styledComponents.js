import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  margin: 9px;
`
export const ThumbnailImg = styled.img`
  height: 234px;
  @media (max-width: 600px) {
    height: 200px;
  }
`
export const VideoTextContainer = styled.div`
  color: #616e7c;
`
export const Title = styled.p`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#0f0f0f')};
  font-weight: 500;
  margin: 3px 0px;
`
export const ViewCount = styled.p`
  margin-top: 5px;
  font-size: small;
`
