import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-72 flex-col justify-between  bg-slate-900">
      <div className="px-4 py-6">
        <ul className="mt-6 ">
          <li>
            <Link
              to={"home"}
                 className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-gray-700"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={"products"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-gray-700"
            >
              Productos
            </Link>
          </li>

          <li>
            <Link
              to={"orders"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-gray-700"
            >
              Pedidos
            </Link>
          </li>

          <li>
            <Link
              to={"users"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-gray-700"
            >
              Usuarios
            </Link>
          </li>

          <li>
            <Link
              to={"tracking"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-gray-700"
            >
              Seguimiento
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
