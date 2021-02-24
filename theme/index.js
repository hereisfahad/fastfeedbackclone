// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const fontWeight = {
  "normal": 400,
  "medium": 600,
  "bold": 700,
}

const theme = extendTheme({
  fontWeight,
  fonts: { body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"` },
  styles: {
    global: {
      html: {
        minHeight: '100vh',
        scrollBehavior: 'smooth'
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      },
      // styles for the `body`
      body: {
        bgGradient: "radial(gray.200, purple.50)",
        color: "black",
      },
    },
  },
})

export default theme