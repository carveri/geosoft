import { IGetDataLista } from "@/app/Interfaces/IFetch"

export const getDataLista = async({ruta, url}:IGetDataLista)=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}/${url}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        return error
    }
}