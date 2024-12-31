import React from 'react'

const ItemProduct = ({name,description,price,stock,images, onEdit}) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-4 py-2 text-gray-100">
          <div className="flex justify-center">
            <img
              alt=""
              src={images}
              className="h-16 w-16 object-cover rounded-full"
            />
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-2  font-medium text-gray-100 text-center">
          {name}
        </td>
        <td className=" px-4  line-clamp-3 max-w-48 text-gray-300 text-center">
          {description}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-300 text-center">
          {price}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-300 text-center">
          {stock}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-center">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            onClick={onEdit}
          >
            Editar
          </a>
          <a
            href="#"
            className="inline-block rounded ml-4 bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
          >
            Eliminar
          </a>
        </td>
      </tr>
  )
}

export default ItemProduct