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
      <div>
        <UserCard data={props.data} />
      </div>
      <div>
        <ul>
          <li>
            <Link href={`/activity/${props.xuid}/${props.gamerTag}`}>
              <a>Activity Card</a>
            </Link>
          </li>
          <li>
            <Link href={`/game-clips/${props.xuid}/${props.gamerTag}`}>
              <a>Game Clips</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
) )

Page.getInitialProps = async function (context) {
  // get gamer tag from url
  const gamerTag = context.query.gamerTag
  
  // get XUID with gamer tag
  const userRes = await fetch(`https://xboxapi.com/v2/xuid/${gamerTag}`, {
    headers: apiHeaders
  })
  const xuid = await userRes.json()
  
  // use XUID to get profile data
  const res = await fetch(`https://xboxapi.com/v2/${xuid}/profile`, {
    headers: apiHeaders
  })
  const data = await res.json()
  
  return {
    data: data,
    xuid: xuid,
    gamerTag: gamerTag
  }
}

export default Page