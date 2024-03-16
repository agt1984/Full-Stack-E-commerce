import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function POST(
    req: Request,
) {
  try {
    const { userId } = auth(); //tenemos acceso al usuario logeado quien trata de crear una nueva tienda con nuestra api
    const body = await req.json();

    const { name } = body;

    //si no tenemos el id
    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    //si el nombre no esta
    if (!name) {
        return new NextResponse("Name is required", { status: 400 });
    }

    //creamos la tienda
    const store = await prismadb.store.create({
        data: {
            name,
            userId
        }
    });

    return NextResponse.json(store);

  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}