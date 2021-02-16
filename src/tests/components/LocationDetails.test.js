import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and country props", () => {
    const { getByText } = render(<LocationDetails city="Manchester" />);
    expect(getByText("Manchester")).toHaveClass("location-details");
  });
});
