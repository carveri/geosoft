

export interface IGet {
    ruta: string
}

export interface IDelete {
    ruta: string
    url: string
}


export interface IGetDataCompleja {
    ruta: string
    param1: string
    param2: string
    param3: string
}


export interface IGetDataCompleja2 {
    ruta: string
    param1: string
    param2: string
}


export interface IGetDataLista {
    ruta: string
    url: string
}

export interface IGetData2 {
    ruta2: string
    data2: string
}


export interface IdatoUsuario{
    apellido: string 
    edad: number
   
    nombre: string
  }
  

export interface IUpdateData {
    ruta: string
    id: string
    data: IdatoUsuario

}