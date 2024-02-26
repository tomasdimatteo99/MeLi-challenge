import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ItemDetail from "@/components/ItemDetail/ItemDetail";
import { itemDetail } from "./mocks/itemDetailMock";
import { resolvedComponent } from "@/utils/resolvedComponent";

describe("ItemDetail", () => {
  it("should render the component correctly", async () => {
    const item = itemDetail.item;
    const description = itemDetail.description;
    const ItemDetailResolved = await resolvedComponent(ItemDetail, {
      item,
      description
    });
    const { container } = render(<ItemDetailResolved/>);
    expect( container ).toMatchSnapshot();
  });
});
