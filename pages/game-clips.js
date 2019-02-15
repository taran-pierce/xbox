import {withRouter} from 'next/router'
import apiHeaders from '../utilities/apiHeaders'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import UserCard from '../components/UserCard'
import Link from 'next/link'
import ActivityCard from '../components/ActivityCard'
import Clips from '../components/Clips'
import Head from '../components/Head'

const Page = withRouter( (props) => (
  <div>
    <Head title={`Game Clips`} />
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
      
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
    <Header gamerTag={props.gamerTag} />
    <div className={`flex`}>
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