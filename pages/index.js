import {withRouter} from 'next/router'
import Header from '../components/Header'

const Page = withRouter( (props) => (
  <div>
    <Header title={`Xbox Live API`} />
    <form id={`gamer-tag-form`} method={`GET`} action={`search`}>
      <label for={`gamer_tag`}>Gamer Tag:
        <input type={`text`} id={`gamer-tag`} name={`gamer_tag`} />
      </label>
      <button>Submit</button>
    </form>
  </div>
) )

export default Page