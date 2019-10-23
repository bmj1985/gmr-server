import React, { useGlobal } from "reactn"
import { useFeathers } from "figbird"
import { Button } from "rebass"

const Logout = () => {
  const { 1: setUser } = useGlobal("user")
  const feathers = useFeathers()

  function signOut() {
    feathers
      .logout()
      .then(() => {
        setUser(null)
      })
      .then(() => feathers.authentication.removeAccessToken())
      .catch(error => {
        console.log("could not log out", error)
      })
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}
    >
      <Button
        variant={"primary"}
        onClick={signOut}
        sx={{ color: "black", background: "blue" }}
      >
        Logout
      </Button>
    </div>
  )
}

export default Logout
