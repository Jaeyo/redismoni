

export const isEmpty = obj =>
  (obj == null) ||
  ((typeof obj === 'string' || obj instanceof String) && obj.trim() === '') ||
  (Array.isArray(obj) && obj.length === 0)


export const generateUrl = (url, args) => {
  let _url = url
  Object.keys(args).forEach(key => {
    const value = args[key]
    if (value != null) {
      _url = _url.replace(`:${key}`, value)
    }
  })
  return _url
}