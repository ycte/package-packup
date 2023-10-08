// 登录模块
import { makeAutoObservable } from "mobx"
import { setToken, getToken, http } from "@/utils"

class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ username, password }) => {
    console.log('loginStore', username, password)
    const res = await http.post('/auth/login', {
      username,
      password
    })
    
    // console.log(res.data)
    this.token = res.data.access_token
    await setToken(res.data.access_token)
    return getToken()
  }
}
export default LoginStore