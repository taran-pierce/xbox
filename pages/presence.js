import {withRouter} from 'next/router'
import apiHeaders from '../utilities/apiHeaders'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import Head from '../components/Head'

const Page = withRouter( (props) => (
  <div>
    <Head title="Presence" />
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
      <ul>
        <li>Status: {props.data.state}</li>
        <li>Device: {props.data.lastSeen.deviceType}</li>
        <li>Last Seen: {props.data.lastSeen.timestamp}</li>
      </ul>
      <ul>
        <li>Name: {props.gamerCard.name}</li>
        <li>Bio: {props.gamerCard.bio}</li>
        <li>Motto: {props.gamerCard.motto}</li>
        <li>Avatar Full: <img src={props.gamerCard.avatarBodyImagePath} /></li>
        <li>Avatar: <img src={props.gamerCard.gamerpicLargeImagePath} /></li>
        <li>Gamerscore: {props.gamerCard.gamerscore}</li>
      </ul>
    </div>
  </div>
) )

Page.getInitialProps = async function (context) {
  const xuid = context.query.xuid
  const gamerTag = context.query.gamerTag
  
  // use XUID to get friends
  const res = await fetch(`https://xboxapi.com/v2/${xuid}/presence`, {
    headers: apiHeaders
  })
  const data = await res.json()
  
  // use XUID to get game clip data
  const gamerCardRes = await fetch(`https://xboxapi.com/v2/${xuid}/gamercard`, {
    headers: apiHeaders
  })
  const gamerCardData = await gamerCardRes.json()
  
  return {
    data: data,
    gamerCard: gamerCardData,
    gamerTag: gamerTag
  }
}

export default Page