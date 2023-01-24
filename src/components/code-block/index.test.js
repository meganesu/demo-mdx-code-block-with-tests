import React from "react"
import { render, screen } from "@testing-library/react"

import * as runtime from 'react/jsx-runtime'
import { evaluate } from "@mdx-js/mdx"

import CodeBlock from "."

describe('CodeBlock component', () => {
  it('renders with file title', async () => {
    const mdFencedCodeBlock = `
      \`\`\`js title="my-test-file.js"
      const test = "hey there!"
      \`\`\`
    `

    const MdxContent = await evaluate(
      mdFencedCodeBlock,
      { ...runtime, development: false },
    ).default

    render(
      <MdxContent components={{pre: CodeBlock}} />
    )

    const element = screen.getByText("my-test-file.js")

    expect(element).toBeDefined()
  });
});
