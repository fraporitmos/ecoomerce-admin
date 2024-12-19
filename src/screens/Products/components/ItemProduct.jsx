import React from 'react'

const ItemProduct = () => {
  return (
    <tr>
          
    <td className="whitespace-nowrap px-4 py-2  font-medium text-gray-100">
      <img
        alt=""
        src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/121457621_01/w=1500,h=1500,fit=pad"
        class=" inset-0 h-16 w-16 object-cover rounded-full"
      />
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-100">
        John Doe
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-300">
        24/05/1995
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-300">
        Web Developer
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-300">
        $120,000
      </td>
      <td className="whitespace-nowrap px-4 py-2">
        <a
          href="#"
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          View
        </a>
      </td>
    </tr>
  )
}

export default ItemProduct