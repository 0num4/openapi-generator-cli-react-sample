import React from "react"
import { DefaultApi } from "./lib/api"
export const TestComponent: React.FC = ()=>{
    const api = new DefaultApi()

;(async () => {
  const book = await api.appControllerGetHello()
  console.log(book);
})()
    return(
        <>
        aaa
        </>
    )
}