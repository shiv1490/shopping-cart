import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Homepage from "./Homepage";

configure({ adapter: new Adapter() });

describe("HomePage Container", () => {
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

    const component = shallow(<Homepage products={products} />);

    expect(component).toMatchSnapshot();
  });
});
