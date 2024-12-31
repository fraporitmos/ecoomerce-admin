import React, { useEffect, useRef, useState } from "react";
import ItemProduct from "./components/ItemProduct";
import axios from "axios";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import mongoose from "mongoose";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const effectCalled = useRef(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1F2937",
    },
  };

  useEffect(() => {
    if (effectCalled.current) return;

    const fetchProducts = async () => {
      try {
        const resp = await axios.get("http://localhost:4043/api/product");
        setProducts(resp.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
    effectCalled.current = true;
  }, []);

  useEffect(() => {
    reset({
      name: currentProduct.name,
      description: currentProduct.description,
      price: currentProduct.price,
      stock: currentProduct.stock,
      images: currentProduct.images,
    });
  }, [currentProduct]);

  function handleEdit(product) {
    setModal(true);
    setCurrentProduct(product);
  }

  const onFormSubmit = (data) => {
      const objProduct = {
        category: currentProduct.category,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        name: data.name,
        description: data.description,
        images: data.images
      };

      updateProduct(objProduct);
 
    
  };

  const updateProduct = async (product) => {
    try {
      const resp = await axios.post("http://localhost:4043/api/product", product, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Respuesta del servidor:", resp.data);
    } catch (error) {
      if (error.response) {
        console.error("Error en la respuesta del servidor:", error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor:", error.request);
      } else {
        console.error("Error al configurar la solicitud:", error.message);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <Modal isOpen={modal} style={customStyles} contentLabel="Editar producto">
        <div className="flex justify-between">
          <h2 className="text-xl text-white mx-4">Editar producto</h2>
          <IoMdCloseCircle
            color="white"
            size={30}
            onClick={() => {
              setModal(false);
            }}
          />
        </div>

        <form
          class="flex w-full max-w-sm space-x-3"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div class="w-full max-w-2xl px-5  m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input
                    type="text"
                    id="contact-form-name"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Name"
                    {...register("name")}
                    defaultValue={currentProduct.name}
                  />
                </div>
              </div>
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Description"
                    {...register("description")}
                    defaultValue={currentProduct.description}
                  />
                </div>
              </div>
            </div>
            <div class="grid mt-4 max-w-xl grid-cols-2 gap-4 m-auto">
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input
                    type="text"
                    id="contact-form-name"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Price"
                    {...register("price")}
                    defaultValue={currentProduct.price}
                  />
                </div>
              </div>
              <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Stock"
                    {...register("stock")}
                    defaultValue={currentProduct.stock}
                  />
                </div>
              </div>
            </div>
            <input
              type="text"
              id="create-account-pseudo"
              class="mt-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="pseudo"
              placeholder="Image"
              {...register("images")}
              defaultValue={currentProduct.images}
            />

            <div class="col-span-2 mt-4 text-right">
              <button
                type="submit"
                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Actualizar
              </button>
            </div>
          </div>
        </form>
      </Modal>

      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100 text-center">
              Imagen
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100 text-center">
              Nombre del producto
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100 text-center">
              Descripción
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100 text-center">
              Role
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100 text-center">
              Stock
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-100 text-center">
              Acción
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {products.length > 0 ? (
            products.map((item) => (
              <ItemProduct
                name={item.name}
                images={item.images}
                description={item.description}
                price={item.price}
                stock={item.stock}
                onEdit={() => handleEdit(item)}
              />
            ))
          ) : (
            <h1>Cargando productos</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsScreen;
