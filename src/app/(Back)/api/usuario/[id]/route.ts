import { NextResponse } from "next/server"
import { usuarioDetalle1 } from "./controller"
import { IParams } from "@/app/Interfaces/IBack"


// ruta get one
export const GET = async({params}:IParams)=>{
    try {
        return NextResponse.json(await usuarioDetalle1.getUsuarioDetalle({params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// ruta put
export const PUT = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await usuarioDetalle1.putUsuario(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


// ruta delete
export const DELETE = async({params}:IParams)=>{
    try {
        return NextResponse.json(await usuarioDetalle1.deleteUsuario({params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}