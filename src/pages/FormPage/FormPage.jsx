import React from "react";
import { useForm } from "react-hook-form";
import Title from "../../components/title/Title";
import FormInput from "../../components/formInput/FormInput";
import "./formpages.css";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Title text="Añade tus datos!" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="nombreEnfermedad"
          label="Nombre de la enfermedad"
          register={register}
          requiredMessage="El nombre de la enfermedad es obligatorio"
          error={errors.nombreEnfermedad}
        />

        <FormInput
          id="descripcionEnfermedad"
          label="Descripción de la enfermedad"
          register={register}
          requiredMessage="La descripción de la enfermedad es obligatoria"
          error={errors.descripcionEnfermedad}
        />

        <FormInput
          id="recomendaciones"
          label="Recomendaciones"
          register={register}
          requiredMessage="Las recomendaciones son obligatorias"
          error={errors.recomendaciones}
        />

        <input id="submit" type="submit" />
      </form>
    </>
  );
};

export default FormPage;
