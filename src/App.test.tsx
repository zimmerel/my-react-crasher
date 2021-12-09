import { render } from "@testing-library/react";
import { BugSplat } from "bugsplat";
import App from "./App";

jest.mock("bugsplat", () => ({
  BugSplat: jest.fn(() => ({
    post: jest.fn(),
  })),
}));

const BugSplatMock = jest.fn<BugSplat, []>();
// as jest.MockedClass<typeof BugSplat>;

describe("<App />", () => {
  let bugsplat: BugSplat;

  beforeEach(() => {
    bugsplat = new BugSplat("fred", "my-react-crasher", "9001.0.0");
  });

  test("renders learn react link", () => {
    const { getByText } = render(<App bugsplat={bugsplat} />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
