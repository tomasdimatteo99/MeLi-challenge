import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Navbar } from "@/components";

describe("Navbar", () => {
  it("should render the component correctly", async () => {
    const { container } = render(<Navbar/>);
    expect( container ).toMatchSnapshot();
  });
});
