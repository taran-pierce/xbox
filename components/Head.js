import nextHead from 'next/head'

const Head = (props) => (
  <div>
    <nextHead>
      <title>{props.title} - Xbox Live API</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </nextHead>
  </div>
)

export default Head