import 'whatwg-fetch'

const Ajax = ({url, method = 'POST'})=> {
  return fetch(url, {
    method: method,
    mode: 'no-cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // body: body
  })
}

export default Ajax
