import { Navbar } from "@/components";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("should render the component correctly", async () => {
    const { container } = render(<Navbar/>);
    expect( container ).toMatchSnapshot();
  });
});
