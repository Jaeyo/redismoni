

export const isEmpty = obj =>
  (obj == null) ||
  ((typeof obj === 'string' || obj instanceof String) && obj.trim() === '') ||
  (Array.isArray(obj) && obj.length === 0)
