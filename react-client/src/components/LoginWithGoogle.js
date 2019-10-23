import React, { useEffect, useGlobal } from "reactn"
import { useFeathers } from "figbird"
import { Button } from "rebass"

import API_URL from "../API_URL"

const LoginWithGoogle = () => {
  const { 1: setUser } = useGlobal("user")
  const feathers = useFeathers()

  useEffect(() => {
    feathers
      .reAuthenticate()
      .then(user => {
        console.log(user)
        setUser(user.user)
      })
      .catch(error => {
        console.log("oh no!", error)
      })
  }, [feathers, setUser])

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
      <Button>
        <a href={`${API_URL}/oauth/google`} variant="danger">
          Login with Google
        </a>
      </Button>
    </div>
  )
}

export default LoginWithGoogle
