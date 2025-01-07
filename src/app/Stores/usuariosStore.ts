import { create } from 'zustand'

interface IIdUsuario {
  idUsuario: string
  updateidUsuario:(idUsuario:string )=>void
}


export const usuarioStore = create<IIdUsuario>((set) => ({
  idUsuario: '',

  updateidUsuario: (idUsuario) => set(() => ({ idUsuario: idUsuario })),
}))