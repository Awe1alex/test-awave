export const fetchUsers = async (page: number) => {
  try {
    const resp = await fetch(`https://reqres.in/api/users?page=${page}`)
    return await resp.json()
  } catch (err) {
    throw err
  }
}
