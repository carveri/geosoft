import { NextResponse } from "next/server"
import { usuarioDetalle1 } from "./controller"
import { IParams } from "@/app/Interfaces/IBack"


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await usuarioDetalle1.getUsuarioDetalle(req, {params}))
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
export const DELETE = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await usuarioDetalle1.deleteUsuario(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}