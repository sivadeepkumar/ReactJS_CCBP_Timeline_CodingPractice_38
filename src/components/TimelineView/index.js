import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimeLineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <TimeLineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOUREY OF <br /> <CCBPHeading>CCBP 4.0 </CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimeLineContainer>
  )
}

export default TimelineView
