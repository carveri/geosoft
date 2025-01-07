'use client'

import {useState, useEffect, Dispatch} from 'react'
import { useRouter } from "next/navigation";
import { getData } from '@/app/(Front)/React/Fetch/getData';
import { deleteData } from '@/app/(Front)/React/Fetch/deleteData';
import Modal from './Components/modal/Modal';
import { usuarioStore } from '@/app/Stores/usuariosStore';
import { IIoModalOpen } from '@/app/Interfaces/IResultado';


const page = () => {

  
  
  const {updateidUsuario} = usuarioStore()

  const [datosUsuarios, setDatosUsuarios] = useState([])
  const [isModalOpen, setIsModalOpen] = useState<boolean> (false)
  
 
  const router = useRouter()
  

  const handleClickEliminar = (id:string)=>{
    const ruta = 'usuario'
    const url = id
    deleteData({ruta, url})
    alert('Se elimino correctamente')
    location.reload()
  }

  const handleClickActualizar =(id:string)=>{
    //console.log(id);
    updateidUsuario(id)
    //setIdActua(id)
    setIsModalOpen(!isModalOpen)
    
  }

  useEffect(()=>{
    const ruta = 'usuario'
    const traerData = async()=>{
      const data = await getData({ruta})
      setDatosUsuarios(data)
    }
    traerData()  
  }, [])

  return (
    <div className={ `h-full ${isModalOpen ? 'bg-gray-300 opacity-10' : 'bg-white'} `}>
      <div className='w-full h-20 grid place-content-center text-violet-500 font-semibold text-tamañoLetra'>
        Lista de Resultados
      </div>
  
      <table className='border border-gray-200    w-[100%]  text-tamañoLetra'>
                  <thead>
                  <tr className='h-14 text-violet-500 font-semibold'>
                      <td className='w-[20%] text-center'>Numero</td>
                      <td className='w-[20%] text-center'>Nombre </td>
                      <td className='w-[20%] text-center'>Apellido</td>
                      <td className='w-[20%] text-center'>Edad</td>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {datosUsuarios?.map((el, index)=>{
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
                        {isModalOpen ? 
                        <>
                          <td className='w-10'>
                          <button disabled onClick={()=>handleClickActualizar(id)} className='hover:shadow-2xl bg-violet-500 opacity-100 py-2 px-5 rounded text-white font-semibold text-tamañoLetraChica'>
                            Actualizar
                          </button>
                        </td>
                        <td className='w-10'>
                          <button disabled onClick={()=>handleClickEliminar(id)} className='hover:shadow-2xl bg-red-500 py-2 px-5 rounded text-white font-semibold text-tamañoLetraChica'>
                            Eliminar
                          </button>
                        </td>
                        </>
                        :
                        <>
                        <td className='w-10'>
                        <button  onClick={()=>handleClickActualizar(id)} className='hover:shadow-2xl bg-violet-500 py-2 px-5 rounded text-white font-semibold text-tamañoLetraChica'>
                          Actualizar
                        </button>
                      </td>
                      <td className='w-10'>
                        <button  onClick={()=>handleClickEliminar(id)} className='hover:shadow-2xl bg-red-500 py-2 px-5 rounded text-white font-semibold text-tamañoLetraChica'>
                          Eliminar
                        </button>
                      </td></>}
                    
                       
                      </tr>
                    })}
                  </tbody>
              </table>
              <div className='w-full h-32 grid justify-end mt-8'>
                {isModalOpen ? 
                  <button disabled onClick={()=>router.push('/dashboard/formulario')} className=' bg-violet-500 text-white font-semibold w-32 h-10 rounded text-tamañoLetra hover:shadow-lg'>
                    Volver
                  </button>
                  :
                  <button  onClick={()=>router.push('/dashboard/formulario')} className='bg-violet-500 text-white font-semibold w-32 h-10 rounded text-tamañoLetra hover:shadow-lg'>
                    Volver
                  </button>
                
              
              }
                <div className=' '>
                  <Modal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    datosUsuarios={datosUsuarios}
                    
                  />
                </div>
              </div>
    </div>
  )
}

export default page