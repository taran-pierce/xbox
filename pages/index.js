import {withRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'

const Page = withRouter( (props) => (
  <div>
    <Header title={`Xbox Live API`} />
    <form id={`gamer-tag-form`} method={`GET`} action={`search`}>
      <input type={`text`} id={`gamer-tag`} name={`gamer_tag`} />
      <button>Submit</button>
    </form>
  </div>
) )

//Page.getInitialProps = async function (context) {
//  const res = await fetch('https://xboxapi.com/v2/accountxuid', {
//    headers: {
//      'X-AUTH': '1aa66306d38baca0e5ded32ab8ff437c8a72bcb5',
//      'Cache-Control': 'no-cache',
//      'Access-Control-Allow-Origin': '*',
//      'Content-Type': 'application/json'
//    }
//  })
//
//  const data = await res.json()
//
//  console.log('data: ', data)
//
//  let userData = {
//    xuid: data.xuid
//  }
//
//  return {
//    userData: userData
//  }
//}

export default Page