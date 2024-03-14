"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

//controla si la tienda esta bierta o cerrada
export const StoreModal = () => {
    const storeModal = useStoreModal();

    return ( //este modal deberia estar disponible para toda la aplicacion, buscar en carpeta providers
        <Modal
          title="Create store"
          description="Add a new store to manage products and categories"
          isOpen={storeModal.isOpen}    //uso sus valores para abrirlo o cerrarlo
          onClose={storeModal.onClose}
        >
          Future Create Store Form
        </Modal>
    );
};