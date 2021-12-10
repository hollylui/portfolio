import { useState } from "react";
import FormContext from "./FormContext";

const FormProvider = ({ children }) => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const providedData = {
    formName,
    setFormName,
    formEmail,
    setFormEmail,
    formMessage,
    setFormMessage,
  };

  return (
    <FormContext.Provider value={providedData}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
