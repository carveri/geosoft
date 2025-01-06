'use client'

import React from 'react'
import { dataResultados } from './utils/dataResultados'
import { useRouter } from "next/navigation";

const page = () => {


  const router = useRouter()

  return (
    <>
      <div className='w-full h-20 grid place-content-center text-violet-500 font-semibold text-base'>
        Lista de Resultados
      </div>
  
      <table className='border border-gray-200   w-[100%]  text-tamañoLetra'>
                  <thead>
                  <tr className='h-14 text-violet-500 font-semibold'>
                      <td className='w-[7%] text-center'>Numero</td>
                      <td className='w-[12%] text-center'>Nombre </td>
                      <td className='w-[8%] text-center'>Apellido</td>
                      <td className='w-[8%] text-center'>Edad</td>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {dataResultados?.map((el, index)=>{
                    const {id, nombre, apellido, edad} = el
                      return <tr key={id} className='border border-gray-200 h-14   w-full '>
                        <td className='text-center'>
                          {index + 1}
                        </td>
                        <td className='text-center'>
                          {nombre}
                        </td>
                        <td className='text-center'>
                          {apellido}
                        </td>
                        <td className='text-center'>
                          {edad}
                        </td>
                       
                      </tr>
                    })}
                  </tbody>
              </table>
              <div className='w-full h-32 grid justify-end mt-8'>
                <button onClick={()=>router.push('/dashboard/formulario')} className='bg-violet-400 text-white font-semibold w-32 h-10 rounded text-tamañoLetra hover:shadow-lg'>
                  Volver
                </button>
              </div>
    </>
  )
}

export default page