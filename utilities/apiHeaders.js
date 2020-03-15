const apiHeaders = {
  // set API KEY from xbox live service here
  'X-AUTH': process.env.API,
  'Cache-Control': 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
}

export default apiHeaders