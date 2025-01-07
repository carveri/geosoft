'use client'

import { postData } from "@/app/(Front)/React/Fetch/postData";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Formulario = () => {

  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState(0)


  const handleChangeInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
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

  const handleClickFormulario =(e:React.FormEvent<HTMLFormElement> | any)=>{
    e.preventDefault()
    if(e.target.name === 'enviar'){
      const data ={nombre, apellido, edad}
      const ruta = 'usuario'
      postData({data, ruta})
      
      router.push('/dashboard/resultado')
    }
    else if(e.target.name === 'ver'){
      router.push('/dashboard/resultado')
    }
    else {console.log('No se encontro el boton')}
    
  }

  return (
    <div className='w-full h-full grid place-items-center text-tamañoLetra'>
      <form  className='w-[400px] h-[550px]  shadow-2xl'>
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
        <div  className='w-full flex h-14 px-5 py-1'>
          <button name="enviar" onClick={handleClickFormulario} className='w-[85%] h-full bg-violet-500 mt-10 text-white font-semibold rounded hover:shadow-lg mr-1'>
            Enviar
          </button>
          <button name="ver" onClick={handleClickFormulario} className='w-[15%] h-full bg-sky-400 mt-10 text-white font-semibold rounded hover:shadow-lg'>
            Ver
          </button>
        </div>
      </form>
    </div>
  )
}

export default Formulario