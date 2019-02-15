import {withRouter} from 'next/router'
import Header from '../components/Header'
import Form from '../components/Form'
import Head from '../components/Head'

const Page = withRouter( (props) => (
  <div>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
    `}</style>
    <Head title={`Gamer Tag Lookup`} />
    <Header title={`Xbox Live API`} />
    <Form />
  </div>
) )

export default Page