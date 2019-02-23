import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CartPopup from "./cartPopup";

configure({ adapter: new Adapter() });

describe("CartPopup component", () => {
  it("should rener cpomponent", () => {
    // const component = <CartPopup />;
    const component = shallow(<CartPopup />);

    expect(component).toMatchSnapshot();
  });
});
