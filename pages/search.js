import {withRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import UserCard from '../components/UserCard'
import ActivityCard from '../components/ActivityCard'
import Clips from '../components/Clips'

const Page = withRouter( (props) => (
  <div>
    <Header title={`Xbox Live API`} />
    <style jsx>{`
      .flex {
        display: grid;
        grid-template-columns: .2fr 1fr;
      }
    `}</style>
    <div className={`flex`}>
      <div>
        <UserCard data={props.data} />
      </div>
      <div>
        <ActivityCard data={props.activityData} />
      </div>
    </div>
    <Clips data={props.clipData} />
  </div>
) )

Page.getInitialProps = async function (context) {
  const apiHeaders = {
    'X-AUTH': '1aa66306d38baca0e5ded32ab8ff437c8a72bcb5',
    //'X-AUTH': '3464bec5b15e8eba49519b9378bb3959cd0b79af',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
  const gamerTag = context.query.gamer_tag
  
  const userRes = await fetch(`https://xboxapi.com/v2/xuid/${gamerTag}`, {
    headers: apiHeaders
  })
  
  const xuid = await userRes.json()
  
  const res = await fetch(`https://xboxapi.com/v2/${xuid}/profile`, {
    headers: apiHeaders
  })
  
  const data = await res.json()
  
  const userActivity = await fetch(`https://xboxapi.com/v2/${xuid}/activity`, {
    headers: apiHeaders
  })
  
  const activityData = await userActivity.json()
  
  const userClips = await fetch(`https://xboxapi.com/v2/${xuid}/game-clips`, {
    headers: apiHeaders
  })
  
  const clipData = await userClips.json()
  
  return {
    data: data,
    activityData: activityData,
    clipData: clipData
  }
}

export default Page