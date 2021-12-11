export const fetchUser = async (id: number) => {
  try {
    const resp = await fetch(`https://reqres.in/api/users/${id}`)

    const respJson = await resp.json()
    if (resp.ok) {
      return respJson
    } else {
      throw respJson.error
    }
  } catch (err) {
    return Promise.reject(err)
  }
}

export const fetchLogin = async (email: string, password: string) => {
  try {
    const resp = await fetch(`https://reqres.in/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const respJson = await resp.json()
    if (resp.ok) {
      return { ...respJson, email, password }
    } else {
      throw respJson.error
    }
  } catch (err) {
    return Promise.reject(err)
  }
}

export const fetchRegister = async (email: string, password: string) => {
  try {
    const resp = await fetch(`https://reqres.in/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const respJson = await resp.json()
    if (resp.ok) {
      return respJson
    } else {
      throw respJson.error
    }
  } catch (err) {
    return Promise.reject(err)
  }
}
