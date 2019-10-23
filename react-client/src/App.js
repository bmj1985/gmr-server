import React, { setGlobal, useGlobal } from "reactn"
import { Provider as FigbirdProvider } from "figbird"
import feathersClient from "./feathersClient"
import Home from "./views/Home"
import LoginWithGoogle from "./components/LoginWithGoogle"

setGlobal({
  user: null
})

export default function App() {
  const [user] = useGlobal("user")
  return (
    <FigbirdProvider feathers={feathersClient}>
      {user ? <Home /> : <LoginWithGoogle />}
    </FigbirdProvider>
  )
}
