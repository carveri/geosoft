'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import logoPrincipal from "../../React/Assets/Icons/logoPricipal2.png";
import enginePortada from "./../../React/Assets/Images/enginePortada.jpg";


const page = () => {

  const router = useRouter();

  

  return (
    <div className='w-full h-full flex px-12 '>
      <section className='w-[43%] h-auto  grid place-items-center'>
        <div className='w-5/6 h-3/5   mt-9'>
          <article className='w-full h-12 text-xl flex'>
            <header className='pr-2'>
              <Image
                  src={logoPrincipal}
                  width={30}
                  height={30}
                  alt="Picture of the author"
              />
              
            </header> 
            <p >
              GeoSoft
            </p>
          </article>
          <article className='text-2xl w-full h-24 py-4 font-bold' >
          The Scrum methodology ERP for StartUps with high growth potential
          </article>
          <article className='text-lg w-full h-2/6 py-4 pl-2'>
            olisss ipsum dolor sit amet consectetur adipisicing elit. Facere non laboriosam, laudantium illum voluptatum adipisci reprehenderit est esse consectetur adipisicing elit. Facere non laboriosam, laudantium i
          </article>
          <article className='w-[95%] h-[15%] grid grid-cols-2 place-items-center gap-x-4 py-3 text-tamañoLetra'>
            <button onClick={()=>router.push('/dashboard/formulario')} className="rounded w-full h-full bg-colorTextoAceptada text-colorTextoBoton font-semibold">Enter</button>
            <button className="rounded w-full h-full bg-violet-500 text-colorTextoBoton font-semibold">Pluggins</button>
          </article>
        </div>
      </section>
      <section className='w-[57%]   grid place-items-center '>
            <div>
                <Image
                    src={enginePortada}
                    width={520}
                    height={420}
                    alt="Picture of the author"
                    className=' -mt-16 rounded-3xl'
                />
            </div>
      </section>
    </div>
  )
}

export default page