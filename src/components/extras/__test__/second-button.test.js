import React from "react";
import ReactDom from "react-dom";
import { SecondButton } from "../second-button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<SecondButton></SecondButton>, div);
});

it("renders correctly", () => {
  const { getByTestId } = render(
    <SecondButton label="click me please"></SecondButton>
  );
  expect(getByTestId("button")).toHaveTextContent("click me please");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(<SecondButton label="click me please"></SecondButton>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
