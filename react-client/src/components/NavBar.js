import React, { useGlobal } from "reactn"
import { Flex, Text, Box, Button, Link } from "rebass"
import Logout from "./Logout"
import Avatar from "./Avatar"
import logo from "../assets/gmr_logo.svg"
import { navigate } from "hookrouter"

const NavBar = () => {
  const [user] = useGlobal("user")
  console.log(user)

  return (
    <Flex
      width={1}
      px={2}
      sx={{ minHeight: 75 }}
      color="white"
      bg="gmrBlue"
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Avatar image={logo} />
      <Text p={2} fontWeight="bold" color="black">
        Golden Mountain Runners
      </Text>
      <Box mx="auto" />
      {user ? (
        <Flex
          width={0.3}
          alignItems="center"
          justifyContent="space-between"
          px={4}
          color="black"
        >
          <Logout />
          <Avatar image={user.profilePicture} />
        </Flex>
      ) : (
        <Flex alignItems="center">
          <Button onClick={() => navigate("/login")} color="black">
            <Link>login/Sign Up</Link>
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default NavBar
