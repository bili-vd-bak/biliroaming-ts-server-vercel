import fetch from "node-fetch";
import qs from 'qs'
import md5 from 'js-md5'
import * as env from '../_config'

const sorted = (params) => {
  const map = new Map
  for (let k in params) {
    map.set(k, params[k])
  }
  const arr = Array.from(map).sort()
  let obj = {}
  for (let i in arr) {
    let k = arr[i][0]
    let value = arr[i][1]
    obj[k] = value
  }
  return obj
}

export const appsign = (params, appkey = '1d8b6e7d45233436', appsec = '560c52ccd288fed045859ed18bffd973'): string => {
  params.appkey = appkey
  params = sorted(params)
  const query = qs.stringify(params)
  const sign = md5(query + appsec)
  params.sign = sign
  return qs.stringify(params)
}

export const UTC = (): number => {
  return Math.round(new Date().getTime() / 1000)
}

export const access_key2info = async (access_key: string) => {
  return await fetch(env.api_search + '/x/v2/account/myinfo?' + appsign({ access_key: access_key, ts: UTC() }))
    .then(res => res.json())
    .then((res) => {
      const data = res.data
      return {
        uid: data.mid,
        vip_type: data.vip.type
      }
    })
}