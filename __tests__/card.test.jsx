import React from "react";
import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/";
import Card from "../src/components/card/Card";
import { MemoryRouter } from "react-router-dom";

describe("Card Component", () => {
  const cardDataInternal = {
    imageSrc: "/test/image.png",
    text: "Test internal link",
    link: "/about",
    title: "Sobre nosotros",
  };

  const cardDataExternal = {
    imageSrc: "/test/image.png",
    text: "Test external link",
    link: "https://example.com",
    title: "Hola",
  };

  it("renders internal link correctly", () => {
    render(
      <MemoryRouter>
        <Card {...cardDataInternal} />
      </MemoryRouter>
    );

    const cardImage = screen.getByAltText("Card Image");
    const cardText = screen.getByText("Test internal link");

    expect(cardImage).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();

    const linkElement = screen.getByRole("link", {
      name: /Test internal link/i,
    });
    expect(linkElement).toHaveAttribute("href", "/about");
  });

  it("handles click on internal link", async () => {
    render(
      <MemoryRouter>
        <Card {...cardDataInternal} />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link", {
      name: /Test internal link/i,
    });
    userEvent.click(linkElement);

    await waitFor(() => {
      expect(screen.getByText(/Sobre nosotros/i)).toBeInTheDocument();
    });
  });
});
