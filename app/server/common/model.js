

export const save = async (instance, datastore) => {
  const inserted = await datastore.insert(instance)
  instance._id = inserted._id
  return inserted
}
