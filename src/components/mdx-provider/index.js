import React from 'react'
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from '../code-block'

const components = {
  pre: props => <CodeBlock {...props} />,
}

const Provider = ({children}) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

export default Provider