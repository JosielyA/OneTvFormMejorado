import React from "react";

function algo() {
  return (
    <div key={i}>
      <div className="w-full">
        <h2 className="font-medium text-xl text-turquesa">Pedido #{i + 1}</h2>
      </div>
      <div className="flex flex-col  items-center bg-grisOscuro p-4 mb-4 rounded-lg">
        <div className="w-full">
          <label className="text-black font-semibold " htmlFor={`titulo_${i}`}>
            Título
          </label>
        </div>
        <input
          className="w-full py-1 px-3 border-turquesa border-b-4 border-x-[1px] my-2 rounded-lg bg-grisOscuro placeholder-turquesa font-semibold"
          type="text"
          name={`titulo_${i}`}
          placeholder="Título"
          onChange={(ev) => {
            pedido.titulo = ev.target.value;
          }}
          required
        />
        <div className="w-full">
          <label
            className="text-black font-semibold "
            htmlFor={`descripcion_${i}`}
          >
            Descripción
          </label>
        </div>
        <textarea
          className="w-full mt-1 h-[100px] py-1 px-3 border-turquesa border-b-4 border-x-[1px] mb-2 rounded-lg bg-grisOscuro placeholder-turquesa font-semibold"
          type="text"
          name={`descripcion_${i}`}
          onChange={(ev) => {
            pedido.descripcion = ev.target.value;
          }}
          placeholder="Descripción"
          required
        />
      </div>
    </div>
  );
}

export default algo;
