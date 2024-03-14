"use client";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
}

//---------------------------------------------------------------
//este código crea un componente de React llamado ModalProvider que se asegura de que su contenido no se renderice hasta que el componente esté completamente montado en el DOM. 
//Esto puede ser útil para evitar problemas con componentes que dependen del DOM al inicializarlos o cuando hay lógica que debe ejecutarse solo después de que el componente esté montado.
//ESTE CODIGO EVITA PROBLEMAS DE HIDRACION----> (en el caso de que se intente acceder al DOM, o a elementos del navegador antes de que React haya terminado de hidratar el contenido, pueden ocurrir errores o comportamientos inesperados.)
//---------------------------------------------------------------