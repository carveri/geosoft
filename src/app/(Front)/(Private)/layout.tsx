import Navbar from "../React/Components/Navbar";



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <div className='w-screen h-screen'>
      <section className='w-full h-12 bg-colorNavbar grid justify-items-center'>
        <header className='w-[85%] h-full bg-colorNavbar'>
         <Navbar />
        </header>
      </section>
      <section className='w-screen h-[850px]  grid justify-items-center bg-colorFondo'>
        <main className='w-[70%] h-full bg-white '>
          {children}
        </main>
      </section>
    </div>
  );
}