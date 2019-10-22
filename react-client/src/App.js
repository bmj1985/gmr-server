import React, { setGlobal, useGlobal } from "reactn"
import { Provider as FigbirdProvider } from "figbird"

import feathersClient from "./feathersClient"
import Login from "./components/Login"

setGlobal({
  user: null
})

export default function App() {
  const [user] = useGlobal("user")
  return (
    <FigbirdProvider feathers={feathersClient}>
      {user ? (
        <div>
          <p>{user.email}</p>
          <img src={user.profilePicture} />
        </div>
      ) : (
        <Login />
      )}
    </FigbirdProvider>
  )
}
