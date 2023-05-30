import axios from "axios"

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/96623806d68d422fb9070e7da12b147e ",
  timeout: 5000,
})