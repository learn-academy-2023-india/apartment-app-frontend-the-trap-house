import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {

  it("renders contact information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Contact us/i)
    expect(footer).toBeInTheDocument()
  })

  it("render navigation link", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Trap Music Museum/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders the TrapHouse", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/The TrapHouse/i)
    expect(footer).toBeInTheDocument()
  })

  it("renders connect with us", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/Connect with us/i)
    expect(footer).toBeInTheDocument()
  })
})