import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchRunemetrics } from "~/services/runescape";

export async function loader({ params }: LoaderFunctionArgs) {
    if (!params.username) return;

    const data = fetchRunemetrics(params.username, 20);

    return data;
}

export default function Profile() {
    const data  = useLoaderData<typeof loader>();
    console.log(data);

    return <>hai</>
}