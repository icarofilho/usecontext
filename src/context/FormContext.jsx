import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const FormContext = createContext();

function FormProvider({ children }) {
  const [data, setData] = useState({ user: "icaro" });

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.element,
};

export default FormProvider;
