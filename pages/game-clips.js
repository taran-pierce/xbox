import {withRouter} from 'next/router'
import apiHeaders from '../utilities/apiHeaders'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import UserCard from '../components/UserCard'
import Link from 'next/link'
import ActivityCard from '../components/ActivityCard'
import Clips from '../components/Clips'

const Page = withRouter( (props) => (
  <div>
    <Header title={`Xbox Live API`} />
    <style jsx>{`
      .flex {
        display: grid;
        grid-template-columns: 1fr;
      }
      @media (min-width: 650px) {
        .flex {
          grid-template-columns: .3fr 1fr;
        }
      }
    `}</style>
    <div className={`flex`}>
      {props.gamerTag}
      <Clips data={props.data} />
    </div>
  </div>
) )

Page.getInitialProps = async function (context) {
  
  const xuid = context.query.xuid
  const gamerTag = context.query.gamerTag
  
  // use XUID to get game clip data
  const userClips = await fetch(`https://xboxapi.com/v2/${xuid}/game-clips`, {
    headers: apiHeaders
  })
  const data = await userClips.json()
  
  return {
    data: data,
    gamerTag: gamerTag
  }
}

export default Page