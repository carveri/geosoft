import { IParams } from "@/app/Interfaces/IBack"
import prisma from "@/libs/prisma"

class UsuarioDetalle {
    
    // metodo get
    getUsuarioDetalle = async({params}:IParams)=>{
        const {id} = await params
        const getOneUsuario = await prisma.usuario.findFirst({
            where:{
                id:id
            },
            orderBy:{
                nombre: 'asc'
            }
        })
        return getOneUsuario
    }

    // metodo put
    putUsuario = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const {nombre, apellido, edad} = await req.json()
        const updatedUsuario = await prisma.usuario.update({
            where:{
                id:id
            },
            data:{
                nombre,
                apellido,
                edad,
                
            }
        })
        return updatedUsuario
    }

    // metodo delete
    deleteUsuario = async({params}:IParams)=>{
        const {id} = await params
        const deletedUsuario = await prisma.usuario.delete({
            where:{
                id:id
            }
        })
        return deletedUsuario
    }
}

export const usuarioDetalle1 = new UsuarioDetalle()