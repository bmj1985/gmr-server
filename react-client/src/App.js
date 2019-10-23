import React, { setGlobal, useGlobal } from "reactn"
import { Provider as FigbirdProvider } from "figbird"
import feathersClient from "./feathersClient"
import Home from "./views/Home"
import { useRoutes } from "hookrouter"
// import Login from "./components/Login"
import LoginWithGoogle from "./components/LoginWithGoogle"

const routes = {
  "/": () => <Home />,
  "/login": () => <LoginWithGoogle />
}

setGlobal({
  user: null
})

export default function App() {
  const [user] = useGlobal("user")
  const routeResult = useRoutes(routes)
  return (
    <FigbirdProvider feathers={feathersClient}>
      {user ? <Home /> : <LoginWithGoogle />}
    </FigbirdProvider>
  )
}
