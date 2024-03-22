import React, { useState } from "react";
import OneTvLogo from "./assets/one_tv_logo.png";
import { FaPlus } from "react-icons/fa";

const defaultState = {
  titulo: "",
  descripcion: "",
  files: [],
};

function FileRow({ onChange, files }) {
  return (
    <div>
      <input
        className="fileInput"
        type="file"
        multiple
        onChange={(e) => onChange("files", e.target.files)}
      />
      <div>
        {files.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
    </div>
  );
}

function Row({ onChange, onRemove, titulo, descripcion, files }) {
  return (
    <div className="flex flex-col">
      <input
        className="tituloInput"
        value={titulo}
        onChange={(e) => onChange("titulo", e.target.value)}
        placeholder="Titulo"
      />
      <textarea
        className="descripcionInput"
        placeholder="Descripcion"
        value={descripcion}
        onChange={(e) => onChange("descripcion", e.target.value)}
      />
      <FileRow onChange={onChange} files={files} />
      <button onClick={onRemove}>Eliminar</button>
    </div>
  );
}

export default function App() {
  const [rows, setRows] = useState([defaultState]);
  const [nombre, setNombre] = useState("");
  const [compania, setCompania] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    if (name === "files") {
      copyRows[index] = {
        ...copyRows[index],
        files: Array.from(value),
      };
    } else {
      copyRows[index] = {
        ...copyRows[index],
        [name]: value,
      };
    }
    setRows(copyRows);
  };

  const handleOnAdd = () => {
    setRows(rows.concat(defaultState));
  };

  const handleOnRemove = (index) => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };

  const handleSubmit = () => {
    console.log(nombre);
    console.log(compania);
    console.log(correo);
    console.log(telefono);
    console.log(rows);
  };

  return (
    <div className="App">
      <div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center p-3">
            <h1 className="text-2xl font-['Roboto'] font-semibold ">
              OneTvStudio
            </h1>
            <h2 className="text-xl font-semibold mb-3 font-['Roboto']">
              Formulario de pedidos
            </h2>
          </div>
          <div className="personalInfoInputLabelContainer">
            <label className="personalInfoInputLabel" htmlFor="nombre">
              Nombre
            </label>
          </div>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            className="personalInfoInput"
          />
          <div className="personalInfoInputLabelContainer">
            <label className="personalInfoInputLabel" htmlFor="compania">
              Compañía
            </label>
          </div>
          <input
            value={compania}
            onChange={(e) => setCompania(e.target.value)}
            placeholder="Compañía"
            className="personalInfoInput"
          />
          <div className="personalInfoInputLabelContainer">
            <label className="personalInfoInputLabel" htmlFor="correo">
              Correo
            </label>
          </div>
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo"
            className="personalInfoInput"
          />
          <div className="personalInfoInputLabelContainer">
            <label className="personalInfoInputLabel" htmlFor="telefono">
              Teléfono
            </label>
          </div>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Telefono"
            className="personalInfoInput"
          />

          <div className="xl:w-4/12 md:w-6/12  w-10/12 flex flex-wrap items-center place-content-between mt-5">
            <h2 className="text-3xl font-semibold font-[Poppins]">Pedidos</h2>
            <button onClick={handleOnAdd} className="addPedidoButton">
              <FaPlus className="mr-1" />
              <span>Agregar Pedido</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="p-4 xl:w-4/12 md:w-6/12  w-10/12">
          {rows.map((row, index) => (
            <Row
              {...row}
              onChange={(name, value) => handleOnChange(index, name, value)}
              onRemove={() => handleOnRemove(index)}
              key={index}
            />
          ))}
        </div>
      </div>

      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
