import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Product from "./product";

configure({ adapter: new Adapter() });

describe("CartPopup component", () => {
  it("should rener component", () => {
    const products = [
      {
        title: "Blue Stripe Stoneware Plate",
        brand: "Kiriko",
        price: 40,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        image: "blue.jpg"
      }
    ];
    const component = shallow(<Product products={products} />);

    expect(component).toMatchSnapshot();
  });
});
