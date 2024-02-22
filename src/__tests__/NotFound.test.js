import { render, screen } from "@testing-library/react"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<NotFound />, div)
        const notFoundImage = screen.getByRole("img")
            expect(notFoundImage).toHaveAttribute("src", "NotFoundImage.gif")
            expect(notFoundImage).toHaveAttribute("alt", "NotFound.gif")
    })
})