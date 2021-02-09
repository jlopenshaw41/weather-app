import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        description: "Stub description 1",
        icon: 800,
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 2222222,
        description: "Stub description 2",
        icon: 602,
        temperature: {
          max: 23,
          min: 13,
        },
      },
      {
        date: 3333333,
        description: "Stub description 3",
        icon: 500,
        temperature: {
          max: 24,
          min: 14,
        },
      },
    ],
    onSelect: () => {},
  };
  it("renders as expected", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of instances of ForecastSummary", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onSelect}
      />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(3);
  });
});
