import { createContext,useContext } from "react";

export type GlobalContent = {
    showRedirect: boolean
    setShowRedirect:(c: boolean) => void
  }
export const AflacContext = createContext<GlobalContent>({
    showRedirect: false,
    setShowRedirect: () => {},
    })
 export const useGlobalContext = () => useContext(AflacContext)