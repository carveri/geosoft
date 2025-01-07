import { IGet } from "@/app/Interfaces/IFetch"

export const getData = async({ruta}:IGet)=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        return error
    }
}