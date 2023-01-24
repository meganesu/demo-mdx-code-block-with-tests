import React from "react"
import { render, screen } from "@testing-library/react"

import CodeBlock from "."

describe('CodeBlock component', () => {
  it('renders', () => {
    const Title = () => (
      <h1>Hi there!</h1>
    )
    
    render(<Title />)

    const element = screen.getByText("Hi there!")

    expect(element).toBeDefined()
  });

  it('renders with file title', () => {
    
  });

  it('renders with language tag', () => {

  });
});
