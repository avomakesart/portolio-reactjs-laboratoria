import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "../button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
  it("should show text", () => {
    const wrapper = shallow(<Button />);
    const text = wrapper.find("div div");
    expect(text.text()).toBe("Text goes here");
  });
  it("should show the text when is clicked", () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find("button");
    button.simulate("click");
    const text = wrapper.find("div div");
    expect(text.length).toBe(0);
  });
});
