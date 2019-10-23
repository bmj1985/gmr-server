import React from "reactn"
import theme from "../theme"
import { ThemeProvider } from "emotion-theming"
// or for use with Theme UI:
// import { ThemeProvider } from 'theme-ui'
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
