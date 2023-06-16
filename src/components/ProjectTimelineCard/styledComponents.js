import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`

export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: flex-start;
`

export const ProjectTitle = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  color: #171f46;
  font-family: 'Roboto';
`

export const ProjectDescription = styled.p`
color:#1e293b;
font-family:'Roboto';
font-size:12px:
line-height:1.5;
margin-top:0px;
`

export const VisitLink = styled.a`
  text-align: center;
  color: #0967d2;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.2;
  text-decoration: none;
  margin-top: 5px;
`
