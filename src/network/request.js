import axios from 'axios'

export function request(config){
  const instance = new axios.create({
    baseURL:'http://123.207.32.32:8000/api/wh'
  })

  instance.interceptors.request.use(config=>{
    return config
  },err=>{

  })
  
  instance.interceptors.response.use(res=>{
    return res
  },err=>{
    console.log(err)
  })
  return instance(config)
}
