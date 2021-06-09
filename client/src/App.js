import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    otherName: "",
    firstLastName: "",
    secondLastName: "",
  });

  const sendData = async () => {
    if ((data.firstName && data.firstLastName && data.secondLastName) === "") {
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
    let onlyLettersAndSpaces = /^[a-zA-Z\s]*$/;
    let isCorrect = onlyLettersAndSpaces.test(val);
    if (isCorrect) {
      return setData({ ...data, [nameInput]: val });
    }

    alert("Inserte solo letras o espacios");
  };

  console.log(data.firstName === "")

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
      <input type="button" value="Guardar Datos" onClick={sendData} />
    </div>
  );
}

export default App;
