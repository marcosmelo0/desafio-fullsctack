import axios from "axios"

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/8e0bb07b74de44418f51c6290e40a5ef",
  timeout: 5000,
})