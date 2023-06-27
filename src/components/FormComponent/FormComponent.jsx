import { useContext, useRef } from "react";
import { FormContext } from "../../context/FormContext";

function FormComponent() {
  const { data, setData } = useContext(FormContext);
  const dataRef = useRef(data);

  const handleInput = (event) => {
    event.preventDefault();
    const {
      current: { value },
    } = dataRef;

    setData((prevData) => {
      return { ...prevData, user: value };
    });
  };

  return (
    <form>
      <input type="text" ref={dataRef} />
      <button type="submit" onClick={handleInput}>
        Enviar
      </button>
    </form>
  );
}

export default FormComponent;
