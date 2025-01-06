
import { NextResponse } from "next/server"
import { usuario1 } from "./controller"

// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await usuario1.postUsuario(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// ruta get 
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await usuario1.getUsuario())
    } catch (error) {
        return NextResponse.json(error)
    }
}