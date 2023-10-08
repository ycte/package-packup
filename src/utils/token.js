const TOKEN_KEY = 'PKT-PICK'

const getToken = () => localStorage.getItem(TOKEN_KEY)
const setToken = async (token) => localStorage.setItem(TOKEN_KEY, token)
const clearToken = () => localStorage.removeItem(TOKEN_KEY)

export { getToken, setToken, clearToken }