import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    otherName: "",
    firstLastName: "",
    secondLastName: "",
    identificationNumber: "",
  });

  const maxCaracterIdentification = 20;
  const maxCaracterOthername = 50;

  const sendData = async () => {
    if (
      (data.firstName &&
        data.firstLastName &&
        data.secondLastName &&
        data.identificationNumber) === ""
    ) {
      return alert("Complete todos los campos antes de guardar los datos");
    }

    let add = await axios.post(`http://localhost:3001/adddata`, { data });

    if (add.data[1]) {
      return alert("usuario agregado correctamente");
    } else {
      alert("usuario ya existe");
    }
  };

  const onChangeInput = (nameInput, val) => {
    if (nameInput === "otherName" && val.length > maxCaracterOthername) {
      return alert(
        `Nombre secundario demasiado largo. Máximo largo ${maxCaracterOthername}`
      );
    }

    let onlyLettersAndSpaces = /^[A-Z\s]*$/;
    let isCorrect = onlyLettersAndSpaces.test(val);
    if (isCorrect) {
      return setData({ ...data, [nameInput]: val });
    }

    alert("Inserte solo letras mayúsculas o espacios");
  };

  const onChangeIdentificationInput = (nameInput, val) => {
    let onlyLettersAndSpaces = /^[a-zA-Z0-9-]*$/;
    let isCorrect = onlyLettersAndSpaces.test(val);
    if (isCorrect && val.length <= maxCaracterIdentification) {
      return setData({ ...data, [nameInput]: val });
    }

    alert(`Superó el largo permitido max ${maxCaracterIdentification}`);
  };

  console.log(data);

  return (
    <div className="App">
      <input
        value={data.firstLastName}
        placeholder="Primer apellido"
        onChange={(e) => onChangeInput("firstLastName", e.target.value)}
      />
      <input
        value={data.secondLastName}
        placeholder="Segundo apellido"
        onChange={(e) => onChangeInput("secondLastName", e.target.value)}
      />
      <input
        value={data.firstName}
        placeholder="Primer nombre"
        onChange={(e) => onChangeInput("firstName", e.target.value)}
      />
      <input
        value={data.otherName}
        placeholder="Otros nombres"
        onChange={(e) => onChangeInput("otherName", e.target.value)}
      />
      <input
        value={data.identificationNumber}
        placeholder="Número de identificación"
        onChange={(e) =>
          onChangeIdentificationInput("identificationNumber", e.target.value)
        }
      />
      <input type="button" value="Guardar Datos" onClick={sendData} />
    </div>
  );
}
//[a-zA-Z0-9-]
export default App;
