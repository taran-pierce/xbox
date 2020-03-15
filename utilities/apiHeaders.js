const apiHeaders = {
  'X-AUTH': process.env.apiKey,
  'Cache-Control': 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
}

export default apiHeaders