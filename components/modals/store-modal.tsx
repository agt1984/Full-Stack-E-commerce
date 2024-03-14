"use client";

import * as z from "zod"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1), //puedo crear una tienda con un solo caracter de nombre con zod
});

//controla si la tienda esta bierta o cerrada
export const StoreModal = () => {
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
      },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => { //operativo, enviará datos al servidor
      console.log(values);
    }

    return (
      //este modal deberia estar disponible para toda la aplicacion, buscar en carpeta providers
      <Modal
        title="Create store"
        description="Add a new store to manage products and categories"
        isOpen={storeModal.isOpen} //uso sus valores para abrirlo o cerrarlo
        onClose={storeModal.onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="E-commerce" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <Button 
                    variant="outline" 
                    onClick={storeModal.onClose}>
                      Cancel
                  </Button>
                  <Button type="submit">Continue</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    );
};

//----------------------------------------------------------------
//zod es biblioteca de validación de esquemas para JavaScript y TypeScript. 
//Permite definir, validar y serializar esquemas de datos de una manera declarativa y altamente tipada.
//----------------------------------------------------------------