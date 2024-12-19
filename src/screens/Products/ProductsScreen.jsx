import React from "react";
import ItemProduct from "./components/ItemProduct";

const ProductsScreen = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">
             Imagen
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">
             Nombre del producto
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">
              Precio
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">
              Role
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">
              Stock
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">
              Acción
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
      
        <ItemProduct/>
        <ItemProduct/>

        <ItemProduct/>
        <ItemProduct/>
        <ItemProduct/>
        <ItemProduct/>

        </tbody>
      </table>
    </div>
  );
};

export default ProductsScreen;
