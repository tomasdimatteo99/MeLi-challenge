import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchItem from "@/components/SearchItem/SearchItem";
import { searchedItems } from "./mocks/searchItemMock";
import { resolvedComponent } from "@/utils/resolvedComponent";

jest.mock('../components/SearchItem/ItemCards/ItemLocation/ItemLocation', () => () => <div data-testid="mocked-item-location"></div>);

describe("SearchItem", () => {
  it("should render the component correctly", async () => {
    const items = searchedItems.items
    const SearchItemResolved = await resolvedComponent(SearchItem, {
        items
    });
    const { container } = render(<SearchItemResolved/>);
    expect( container ).toMatchSnapshot();
  });
});
