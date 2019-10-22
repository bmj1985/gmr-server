import { useState } from "react"
import React, { useGlobal } from "reactn"
import { Responsive, Menu, Button, Container, Image } from "semantic-ui-react"
import Logout from "./Logout"

const getWidth = () => {
  const isSSR = typeof window === "undefined"

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const Header = props => {
  const { children } = props
  const [fixed] = useState(true)

  const [activeItem, setActiveItem] = useState("home")
  const [user] = useGlobal("user")

  function handleItemClick(e, { name }) {
    setActiveItem(name)
  }

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Menu
        fixed={fixed ? "top" : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size="large"
      >
        <Container>
          <Menu.Item
            name="home"
            as="a"
            active={activeItem === "home"}
            onClick={handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="work"
            as="a"
            active={activeItem === "work"}
            onClick={handleItemClick}
          >
            Work
          </Menu.Item>
          <Menu.Item
            name="work"
            as="a"
            active={activeItem === "work"}
            onClick={handleItemClick}
          >
            Work
          </Menu.Item>
          <Menu.Item
            name="work"
            as="a"
            active={activeItem === "work"}
            onClick={handleItemClick}
          >
            Work
          </Menu.Item>
          {!user ? (
            <Menu.Item position="right">
              <Button as="a" inverted={!fixed}>
                Log in
              </Button>
              <Button
                as="a"
                inverted={!fixed}
                primary={fixed}
                style={{ marginLeft: "0.5em" }}
              >
                Sign Up
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item position="right">
              <Image src={user.profilePicture} avatar />
              <Logout />
            </Menu.Item>
          )}
        </Container>
      </Menu>
      {children}
    </Responsive>
  )
}

export default Header
