import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
configure({ adapter: new Adapter() });

it("should render properly", () => {
  const component = shallow(<App />, { context: {} }).dive();
  expect(component).toMatchSnapshot();
});
