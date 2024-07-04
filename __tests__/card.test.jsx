// __tests__/card.test.jsx
import React from "react";
import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/"; // Importante para tener las funciones como toBeInTheDocument y toHaveAttribute
import Card from "../src/components/card/Card"; // Ajusta la ruta según tu estructura de archivos
import { MemoryRouter } from "react-router-dom";

describe("Card Component", () => {
  const cardDataInternal = {
    imageSrc: "/test/image.png",
    text: "Test internal link",
    link: "/about",
  };

  const cardDataExternal = {
    imageSrc: "/test/image.png",
    text: "Test external link",
    link: "https://example.com",
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

    // Esperamos a que se renderice cualquier contenido visible en la página
    await waitFor(() => {
      // Verificamos si hay algún contenido visible en la página de "About Us"
      expect(screen.getByText(/Sobre nosotros/i)).toBeInTheDocument();
    });
  });
});
