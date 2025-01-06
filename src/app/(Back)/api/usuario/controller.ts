import prisma from "@/libs/prisma"


class Usuarios {
    postUsuario = async(req:Request)=>{
        const {nombre, apellido, edad} = await req.json()
        const saveUsuario = await prisma.usuario.create({
            data:{
                nombre: nombre,
                apellido: apellido,
                edad: edad
            }
        })
        return saveUsuario
    }

    getUsuario = async()=>{
        const getAllUsuario = await prisma.usuario.findMany({
            orderBy:{
                nombre: 'asc'
            }
        })
        return getAllUsuario
    }
}

export const usuario1 = new Usuarios()