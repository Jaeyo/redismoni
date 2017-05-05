

export const save = async (instance, datastore) => {
  const inserted = await datastore.insert(this)
  instance.id = inserted._id
  return inserted
}
