import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description 1",
      icon: "StubIcon1",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 2222222,
      description: "Stub description 2",
      icon: "StubIcon2",
      temperature: {
        max: 23,
        min: 13,
      },
    },
    {
      date: 3333333,
      description: "Stub description 3",
      icon: "StubIcon3",
      temperature: {
        max: 24,
        min: 14,
      },
    },
  ];
  it("renders as expected", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  xit("renders the correct number of instances of ForecastSummary", () => {});
});
