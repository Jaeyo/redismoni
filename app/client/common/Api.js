import fetch from 'isomorphic-fetch'


export const fetchGet = (url) =>
  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })

export const fetchPost = (url, payload) =>
  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(payload)
  })
