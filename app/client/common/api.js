

export const fetchGet = (url) => fetch(url)

export const fetchPost = (url, payload) =>
  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(payload)
  })
