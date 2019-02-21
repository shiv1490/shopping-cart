import React from "react";
import { shallow } from "enzyme";
import CartPopup from "./cartPopup";

describe("CartPopup component", () => {
  let wrapper = null;
  it("should rener cpomponent", () => {
    // const component = <CartPopup />;
    const component = shallow(<CartPopup />);

    expect(component).toMatchSnapshot();
  });
});
