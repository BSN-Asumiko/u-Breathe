// __tests__/appPage.test.jsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/";
import AppPage from "../src/pages/AppPage/AppPage";

jest.mock("../src/services/useApi", () => {
  return jest.fn().mockImplementation((city) => {
    return Promise.resolve({
      pollutionIndex: 3,
      pm25Value: 10,
      pm10Value: 20,
      o3Value: 30,
    });
  });
});

describe("AppPage Component", () => {
  it("renders AppPage correctly", async () => {
    render(<AppPage />);

    await waitFor(() => {
      const cityElements = screen.queryAllByText("Barcelona");
      expect(cityElements.length).toBeGreaterThan(0);

      expect(screen.getByText("pm 2.5")).toBeInTheDocument();
      expect(screen.getByText("pm 10")).toBeInTheDocument();
      expect(screen.getByText("o3")).toBeInTheDocument();
    });
  });
});
