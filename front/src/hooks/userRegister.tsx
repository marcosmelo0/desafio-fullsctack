import { useContext } from "react"
import { UserContext } from "../providers/RegisterProvider"

export const useRegister = () => {
  const registerContext = useContext(UserContext)

  return registerContext
}