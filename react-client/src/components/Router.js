import { useRoutes } from "hookrouter"
import Home from "../views/Home"
import LoginWithGoogle from "./LoginWithGoogle"
import React from "reactn"

const routes = {
  "/": () => <Home />,
  "/login": () => <LoginWithGoogle />
}

const Router = () => {
  const routeResult = useRoutes(routes)

  return routeResult
}

export default Router
