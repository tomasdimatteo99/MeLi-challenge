import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ItemLocation from "@/components/SearchItem/ItemCards/ItemLocation/ItemLocation";
import { resolvedComponent } from "@/utils/resolvedComponent";

describe("ItemLocation", () => {
  it("should render the component correctly", async () => {
    const ItemLocationResolved = await resolvedComponent(ItemLocation, {
        "id": "MLA1397418693"
    });
    const { container } = render(<ItemLocationResolved/>);
    expect( container ).toMatchSnapshot();
  });
});


