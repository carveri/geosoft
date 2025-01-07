
interface IdatoUsuario{
  apellido: string 
  edad: number
  id: string
  nombre: string
}


export interface IModal {
  isModalOpen: boolean
  setIsModalOpen: (arg0:boolean)=>void
  datosUsuarios: IdatoUsuario[]
}