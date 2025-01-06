import Link from 'next/link'
import React from 'react'
import { dataNavHome } from '../Utils/dataNavbars/dataNavHome'
import Image from 'next/image'

import logoPrincipal from "../../React/Assets/Icons/logoPricipal2.png";

const NavbarHome = () => {


    //console.log(dataNavHome.length);
    

  return (
    <div className='flex h-full w-full  px-2 border-b bg-colorNavbar group pr-14 '>
        <header className='w-4/5 h-full ml-10 grid items-center pl-4 text-lg   hover:drop-shadow-2xl '>
            <div className='w-[28%] h-[70%]  grid place-content-center   hover:shadow-lg cursor-pointer duration-300 px-2'>
                <Link className='flex text-colorTextoNavbar hover:text-colorTexto text-sm' href={'/'}>
                    <header className='pr-2'>
                        <Image
                            src={logoPrincipal}
                            width={20}
                            height={20}
                            alt="Picture of the author"
                        />
                    </header>  
                    <div className='font-semibold'>
                        GeoSoft 
                    </div>
                    <div className='pl-2 text-tamañoLetraChica grid content-end  '>
                        Engine For StartUps
                    </div>
                </Link>
            </div>
        </header>
        <ul className={`mr-14 w-[60%] h-full grid grid-cols-10  font-light gap-x-1 text-center group-has-[&>li]:text-colorTextoNavbar group-has-[&>li]:justify-items-center group-has-[&>li]:text-base`}>
            {dataNavHome.map((el)=>{
                const {id, href, texto} = el
                return (       
                        <Link className=' h-full text-colorTextoNavbar  grid content-center text-tamañoLetraChica font-semibold'  href={href} key={id}>
                            {typeof(texto) === 'string' ? texto : <Image className='' src={texto} width={20} height={20} alt="icono" />}
                        
                        </Link>
                )
            })}
        </ul>
    </div>
  )
}

export default NavbarHome