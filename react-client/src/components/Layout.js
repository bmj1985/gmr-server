import React from "reactn"
import { Flex } from "rebass"
import NavBar from "./NavBar"

const Layout = props => {
  const { children } = props
  return (
    <Flex width={1} sx={{ height: "100vhw" }}>
      <NavBar />
      {children}
    </Flex>
  )
}

export default Layout
