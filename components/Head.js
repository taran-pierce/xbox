import NextHead from 'next/head'

const Head = (props) => (
  <div>
    <NextHead>
      <title>{props.title} - Xbox Live API</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  </div>
)

export default Head