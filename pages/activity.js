import {withRouter} from 'next/router'
import apiHeaders from '../utilities/apiHeaders'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'
import Link from 'next/link'
import ActivityCard from '../components/ActivityCard'
import Head from '../components/Head'

const Page = withRouter( (props) => (
  <div>
    <Head title={`Activity Feed`} />
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
    `}</style>
    <Header title={`Xbox Live API`} gamerTag={props.gamerTag} />
    <ActivityCard data={props.data} />
  </div>
) )

Page.getInitialProps = async function (context) {
  
  const xuid = context.query.xuid
  const gamerTag = context.query.gamerTag
  
  // use XUID to get game clip data
  const activity = await fetch(`https://xboxapi.com/v2/${xuid}/activity`, {
    headers: apiHeaders
  })
  const data = await activity.json()
  
  return {
    data: data,
    gamerTag: gamerTag
  }
}

export default Page