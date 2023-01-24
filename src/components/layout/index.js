import React from "react"
import MDXProvider from "../../components/mdx-provider"

const Layout = ({ children }) => {
  return (
    <MDXProvider>{children}</MDXProvider>
  )
}

export default Layout
