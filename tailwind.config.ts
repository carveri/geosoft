import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        // General
        'colorFondoGrande': '#ffffff',
        'colorFondoChico': '#ffffff',

        // textos
        'colorTextoNavbar': 'rgb(78, 92, 159)',
        'colorTextoTitulo1': 'rgb(95, 103, 210)',
        'colorTextoTitulo2': 'rgb(36, 28, 34)',
        'colorTextoBarraAlta': 'white',
        'colorTextoBarraBaja': 'white',
        'colorTextoBoton': 'white',
        'colorTextoCaja': 'white',
        'colorTextoAceptada': 'rgb(0, 255, 0)',
        'colorTextoRetornada': 'rgb(217, 8, 214)',
        'colorTextoContraOferta': '#ff5b08',
        'colorTextoBotonVer': 'black',

        
        // Componentes
        'colorNavbar': '#ffffff',
        'colorFormularioLogin': 'rgb(78, 92, 159)',
        'colorSidebar': 'rgb(146, 153, 255)',
        'colorBarraBaja': 'rgb(95, 103, 210)',
        'hoverColorSidebar': 'rgb(134, 141, 236)',
        'colorBarraSuperiorTablas': 'rgb(122, 143, 253)',
        'colorCajaLogo': 'rgb(73, 61, 163)',
        'colorHoverLista': 'rgb(208, 216, 255)',

        // Botones
        'colorBotonPrincipal':'rgb(114, 122, 240)',
        'hoverColorBotonPrincipal': 'rgb(95, 103, 210)',
        'colorBotonAceptar': 'rgb(1, 224, 1)',
        'hoverColorBotonAceptar': '#07a53c',
        'colorBotonSecundario': '#196363',
        'colorBotonEliminar': '#e1103d',
        'colorBotonActualizar': '#0051ff',
        'colorBotonVer': 'rgb(237 233 254)',


        
        'colorFondo': '#ffffff',
        'colorCajaBloqueda': '#b4b0b0',
        'bgBloqueado': '#a4a1a1',
        
       


      },
        fontSize:{
          'tamañoLetra': '0.860rem',
          'tamañoLetraChica': '12px',
          
        }
    },
  },
  plugins: [],
} satisfies Config;
