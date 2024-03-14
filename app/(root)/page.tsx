"use client"; //para el cliente

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (  
    <div className="p-4">
      Root Page
    </div>
  );
};

export default SetupPage;

//----------------------------------------------------------------
//Este componente SetupPage inicializa la aplicación, asegurándose de que la modalidad esté abierta según 
//sea necesario y luego muestra el contenido principal de la página.
//----------------------------------------------------------------
