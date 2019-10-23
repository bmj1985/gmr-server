import React from "reactn"
import { Image } from "rebass"

const Avatar = props => (
  <Image
    src={props.image}
    sx={{
      verticalAlign: "middle",
      width: 50,
      borderRadius: "50%"
    }}
  />
)

export default Avatar
