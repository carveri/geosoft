'use client'

import { updateData } from '@/app/(Front)/React/Fetch/updateData'
import { usuarioStore } from '@/app/Stores/usuariosStore'
import {useEffect, useState} from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from "next/navigation";
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { IModal } from '@/app/Interfaces/IModal'
import { IdatoUsuario } from '@/app/Interfaces/IFetch'


const Modal = ({isModalOpen, setIsModalOpen, datosUsuarios}:IModal) => {
  

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState(0)

    const [datoDelUsuario, setDatoDelUsuario] = useState<IdatoUsuario>(Object)

    const router = useRouter()
    const {idUsuario} = usuarioStore()
    //console.log('idenmododal:', idActua);

    
    useEffect(()=>{
      const traerData = async()=>{
        const ruta = 'usuario'
        const url = idUsuario
        const res = await getDataLista({ruta, url})
        setDatoDelUsuario(res)
      }
      traerData()
    }, [])
    

    
    const handleChangeActua =( e:React.ChangeEvent<HTMLInputElement> )=>{
        if(e.target.name === 'nombre' && e.target.value.length > 0){
            setNombre(e.target.value)
        }
        else if(e.target.name === 'apellido' && e.target.value.length > 0){
            setApellido(e.target.value)
        }
        else if(e.target.name === 'edad' && e.target.value.length > 0){
            setEdad(e.target.valueAsNumber)
        }
        else {
            console.log('No se encontro el campo');
            
        }
    }

    const handleClickActualizarUsua =()=>{
        const ruta = 'usuario'
        const id = idUsuario
        const data = {
            nombre:nombre.length > 0 ? nombre : datoDelUsuario?.nombre,
            apellido:apellido.length > 0 ? apellido : datoDelUsuario?.apellido,
            edad: edad.valueOf() > 0 ? edad : datoDelUsuario?.edad
          }
        updateData({ruta, id, data})
        alert('Se actualizo correctamente')
        setIsModalOpen(false)
        location.reload()
    }


    const handleClickCerrarUsua =()=>{
        setIsModalOpen(false)
    }


    
    console.log('datosen modal:', datosUsuarios);
    //console.log('datounico,', dataUsuarios);
    console.log('datounico:', datoDelUsuario);
    
    
    


    if(!isModalOpen) return null;
  return createPortal(

    <div className='w-[400px] h-[410px] bg-white border border-gray-200 shadow-2xl fixed top-36 left-[770px] py-3 text-tamañoLetra'>
        <header className='w-full h-16 py-2 grid place-content-center text-violet-500 font-semibold'>Actualizar Usuario</header>
        <div className='flex flex-col h-20 px-7'>
          <label className="text-violet-500 font-semibold">Nombre</label>
          <input defaultValue={datoDelUsuario?.nombre}   onChange={handleChangeActua} name="nombre"  className='h-12 pl-3 border border-gray-200 rounded text-gray-600'  placeholder='Juan' type="text" />
        </div>
        <div className='flex flex-col h-20 px-7'>
          <label className="text-violet-500 font-semibold">Apellido</label>
          <input defaultValue={datoDelUsuario?.apellido}  onChange={handleChangeActua} name="apellido"  className='h-12 pl-3 border border-gray-200 rounded text-gray-600' placeholder='Perez' type="text" />
        </div>
        <div className='flex flex-col h-20 px-7'>
          <label className="text-violet-500 font-semibold">Edad</label>
          <input defaultValue={datoDelUsuario?.edad} onChange={handleChangeActua} name="edad" className='h-12 pl-3 border border-gray-200 rounded text-gray-600' placeholder='30' type="number" />
        </div>
        <div className='w-full h-14 flex place-items-center pl-6'>
            <button onClick={handleClickActualizarUsua}  className='hover:shadow-2xl mr-2 bg-violet-500 w-60 py-3 px-7 rounded text-white font-semibold text-tamañoLetraChica'>
                Actualizar
            </button>
            <button onClick={handleClickCerrarUsua}  className='hover:shadow-2xl bg-red-500 w-24 py-3 px-7 rounded text-white font-semibold text-tamañoLetraChica'>
              Cerrar
            </button>
        </div>
    </div>, document.body
  )
}

export default Modal