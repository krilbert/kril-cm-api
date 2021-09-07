import fetch, { RequestInit } from 'node-fetch'

const apiUrl = 'https://api.createsend.com/api/v3.2'

type ConfigRequest = Omit<RequestInit, 'method' | 'body'> & {
  queryParams?: Record<string, any>
  body?: Record<string, any>
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

const client = (method: Method) => {
  return async function request<T>(authHeader: string, path: string, configRequest: ConfigRequest = {}): Promise<T> {
    const { queryParams, body } = configRequest

    const queryString =
      queryParams &&
      Object.keys(queryParams)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&')

    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
    }

    if (['PUT', 'POST'].includes(method) && body) config.body = JSON.stringify(body)

    try {
      const url = `${apiUrl}${path}?${queryString}`
      const response = await fetch(url, config)
      const data = await response.json()
      if (response.ok) {
        return Promise.resolve(data as T)
      } else {
        return Promise.reject(data)
      }
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export const getRequest = client('GET')
export const postRequest = client('POST')
export const putRequest = client('PUT')
export const deleteRequest = client('DELETE')
