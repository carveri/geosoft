'use client'

import { postData } from "@/app/(Front)/React/Fetch/postData";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Formulario = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState(0)

  const router = useRouter()

  const handleChangeInput =(e)=>{
    if(e.target.name === 'nombre'){
      setNombre(e.target.value)
    }
    else if(e.target.name === 'apellido'){
      setApellido(e.target.value)
    }
    else if(e.target.name === 'edad'){
      setEdad(e.target.valueAsNumber)
    }
    else{
      console.log('No se encontro el campo');
      
    }
  }

  const handleSubmitForm =(e)=>{
    e.preventDefault()
    console.log(nombre, apellido, edad);
    const data ={nombre, apellido, edad}
    const ruta = 'usuario'
    postData({data, ruta})
    
    router.push('/dashboard/resultado')
  }

  return (
    <div className='w-full h-full grid place-items-center text-tamañoLetra'>
      <form onSubmit={handleSubmitForm} className='w-[400px] h-[550px]  shadow-2xl'>
        <header className='w-full h-28 text-base grid place-content-center text-violet-500 font-semibold'>
          <h1>Formulario</h1>
        </header>
        <div className='flex flex-col h-20 px-5'>
          <label className="text-violet-500 font-semibold">Nombre</label>
          <input name="nombre" onChange={handleChangeInput} className='h-12 pl-3 border border-gray-200 rounded'  placeholder='Juan' type="text" />
        </div>
        <div className='flex flex-col h-20 px-5'>
          <label className="text-violet-500 font-semibold">Apellido</label>
          <input name="apellido" onChange={handleChangeInput} className='h-12 pl-3 border border-gray-200 rounded' placeholder='Perez' type="text" />
        </div>
        <div className='flex flex-col h-20 px-5'>
          <label className="text-violet-500 font-semibold">Edad</label>
          <input name="edad" onChange={handleChangeInput} className='h-12 pl-3 border border-gray-200 rounded' placeholder='30' type="number" />
        </div>
        <div  className='w-full h-16 px-5 py-1'>
          <button className='w-full h-full bg-violet-400 mt-10 text-white font-semibold rounded hover:shadow-lg'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Formulario