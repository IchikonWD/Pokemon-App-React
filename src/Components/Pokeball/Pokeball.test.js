import React from "react";
import { shallow } from "enzyme";
import Pokeball from "./Pokeball";

describe("Pokeball", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokeball />);
    expect(wrapper).toMatchSnapshot();
  });
});
