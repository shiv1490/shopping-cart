import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cart from "./Cart";

configure({ adapter: new Adapter() });

describe("Cart container", () => {
  it("should rener component", () => {
    const cartDetails = [
      {
        title: "Blue Stripe Stoneware Plate",
        brand: "Kiriko",
        price: 40,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        image: "blue.jpg"
      }
    ];

    const cartTotal = 40;
    const component = shallow(
      <Cart cartTotal={cartTotal} cartDetails={cartDetails} />
    );

    expect(component).toMatchSnapshot();
  });
});
