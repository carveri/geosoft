import { IGetDataCompleja2 } from "@/app/Interfaces/IFetch"

export const getDataCompleja2 = async({ruta, param1, param2}:IGetDataCompleja2)=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}?areaId=${param1}&empresaId=${param2}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        
    }
}