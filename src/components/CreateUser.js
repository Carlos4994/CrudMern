import React, { useState } from "react";
import uniqid from 'uniqid'

function CreateUser() {
  const [nombre, setNombre] = useState("");
  const [email, setEmil] = useState("");
  const [telefono, setTelefono] = useState("");
  function crerUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario:uniqid()
    }
    console.log(usuario)
   
  }
  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => {
            setEmil(e.target.value);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Telefono:</label>
        <input
          type="text"
          className="form-control"
          value={telefono}
          onChange={(e) => {
            setTelefono(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={crerUsuario} className="btn btn-primary">
        Guardar Usuario
      </button>
    </div>
  );
}

export default CreateUser;
