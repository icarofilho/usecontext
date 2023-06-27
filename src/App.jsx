import "./App.css";

import { useContext } from "react";
import { FormContext } from "./context/FormContext";
import FormComponent from "./components/FormComponent/FormComponent";

function App() {
  const { data } = useContext(FormContext);
  return (
    <>
      <div>{data.user}</div>
      <FormComponent />
    </>
  );
}

export default App;
