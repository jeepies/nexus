import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import NoProfileCard from "~/components/NoProfileCard";
import ProfileHeader from "~/components/ProfileHeader";
import ProfileLevelsCard from "~/components/ProfileLevelsCard";
import ProfileLevelsCardProps from "~/components/ProfileLevelsCard";
import { fetchChatHeadPicture, fetchRunemetrics } from "~/services/runescape";

export async function loader({ params }: LoaderFunctionArgs) {
    if (!params.username) return;

    let data = await fetchRunemetrics(params.username, 20);
    let chatHead = await fetchChatHeadPicture(params.username);

    return { username: params.username ?? "Sliske", data: data ?? {}, error: data.error, chatHead: chatHead };
}

export default function Profile() {
    const data = useLoaderData<typeof loader>();

    if (!data) {
        return <>internal error</>
    }

    if (data.error) {
        switch (data.error) {
            case "NO_PROFILE":
                return <NoProfileCard />
        }
    }

    return <>
        <ProfileHeader Username={data.username} ChatHead={data.chatHead} TotalXP={data.data.totalxp} Rank={data.data.rank} LoggedIn={data.data.loggedin} />
        <ProfileLevelsCard SkillValues={data.data.skillvalues}/>
    </>
}

export const meta: MetaFunction<typeof loader> = (loader) => {
    if (!loader || !loader.data) {
        return [
            { title: `Internal Error - Nexus` },
            { name: "description", content: `Unfortunately, we've ran into an issue! If this issue persists, please don't hesitate to message us!` },
        ];
    }
    if (loader.data.error === "NO_PROFILE") {
        return [
            { title: `Invalid Profile - Nexus` },
            { name: "description", content: `Unfortunately, ${loader.data.username} does not play RuneScape!` },
        ];
    }
    return [
        { title: `${loader.data.username}'s Profile - Nexus` },
        { name: "description", content: `View ${loader.data.username}'s profile on Nexus` },
    ];
};