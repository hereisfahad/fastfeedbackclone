export const fetcher = async (url, token) => {
  let res = await fetch(url, {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json', token }),
    credentials: 'same-origin'
  })
  let data = await res.json()
  return data
}
