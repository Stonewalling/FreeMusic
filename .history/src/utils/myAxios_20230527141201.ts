/*
 * @Author: David
 * @Date: 2023-05-27 13:31:09
 * @LastEditTime: 2023-05-27 14:12:01
 * @LastEditors: David
 * @Description:
 * @FilePath: \music\src\utils\myAxios.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const instance = axios.create({
  baseURL: "",
  timeout: 5000,
  headers: {},
})

instance.interceptors.request.use(
  (conf: AxiosRequestConfig) => {
    return conf
  },
  (err) => {
    return Promise.reject(err)
  }
)