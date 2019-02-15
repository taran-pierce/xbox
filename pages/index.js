import {withRouter} from 'next/router'
import Header from '../components/Header'
import Form from '../components/Form'

const Page = withRouter( (props) => (
  <div>
    <Header title={`Xbox Live API`} />
    <Form />
  </div>
) )

export default Page