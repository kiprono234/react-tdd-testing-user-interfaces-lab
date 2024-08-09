import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("renders an image ofmyslef with alt text", () => {
    render(<App/>)
    // const image = screen.getAllByAltText(/myphoto/i)
    // expect(image).toBeInTheDocument()
    // expect(image).toHaveAttribute("src", "path/to/your/image.jpg")
})

test("renders a second-level heading with text 'About Me' ", () => {
 render(<App/>)
//  const heading = screen.getByRole("heading", {level: 2})
//  expect(heading).toBeInTheDocument()
//  expect(heading).toHaveTextContent("About Me")
})

test("renders a link to my GitHub page" , () => {
    render(<App/>)
    // const githubLink = screen.getByRole("link",  {name: /github/i})
    // expect(githubLink).toBeInTheDocument()
    // expect(githubLink).toHaveAttribute("href", "https://github.com/Kipronok234")

}) 

test("renders a paragraph with biography text", () => {
    render(<App/>)
    // const paragraph = screen.getByText(/this is my biography/i)
    // expect(paragraph).toBeInTheDocument()

})
test("renders a link to my LinkedIn page", () => {
    render(<App/>)
    // const linkedInLink = screen.getByRole("link" , {name: /linked/in})
    // expect(linkedInLink).toBeInTheDocument()
    // expect(linkedInLink).toHaveAttributte("href",  "https://linkedin.com/in/yourprofile")
})
