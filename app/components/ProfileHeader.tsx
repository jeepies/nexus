interface ProfileHeaderProps {
    Username: string,
    ChatHead: string,
    TotalXP: number,
    Rank: string,
    LoggedIn: string,
}

export default function ProfileHeader(props: ProfileHeaderProps) {
    return <>
        <img src={`data:image/png;base64, ${props.ChatHead}`}/>
        {props.Username}
        {props.TotalXP}
    </>
}