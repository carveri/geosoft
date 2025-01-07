import { IUpdateData } from "@/app/Interfaces/IFetch"

export const updateData = async({ruta, id, data}:IUpdateData)=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}/${id}`

        const res = await fetch(apiUrl, {
            method: 'PUT',
            body: JSON.stringify(data)
        })
        const desjson = await res.json()
        return desjson
    } catch (error) {
        return error
    }
}