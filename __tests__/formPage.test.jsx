import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/";
import FormPage from "../src/pages/FormPage/FormPage";

describe("FormPage", () => {
  it("should submit the form successfully", async () => {
    const { getByLabelText, getByText, getByRole } = render(<FormPage />);

    // Simular la entrada de datos en los campos del formulario
    fireEvent.change(getByLabelText(/Nombre de la enfermedad/i), {
      target: { value: "Neumonía" },
    });
    fireEvent.change(getByLabelText(/Descripción de la enfermedad/i), {
      target: {
        value:
          "Infección del pulmón que puede ser causada por múltiples microorganismos (bacterias, virus y hongos).",
      },
    });
    fireEvent.change(getByLabelText(/Recomendaciones/i), {
      target: {
        value: "Evitar los días de exposición, usar mascarilla",
      },
    });

    // Simular el envío del formulario
    fireEvent.click(getByRole("button", { name: /submit/i }));

    // Esperar a que el mensaje de éxito aparezca
    await waitFor(() => {
      expect(getByText("¡Enviado!")).toBeInTheDocument();
    });
  });
});
