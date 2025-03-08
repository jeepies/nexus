import { Card, CardTitle } from "./card";

interface ProfileHeaderProps {
  Username: string;
  ChatHead: string;
  TotalXP: number;
  Rank: string;
  LoggedIn: string;
}

export default function ProfileHeader(props: ProfileHeaderProps) {
  return (
    <Card>
      <CardTitle className="p-6 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <img src={`data:image/png;base64, ${props.ChatHead}`} />
        <div>
          <h1 className="text-3xl text-bold">{props.Username}</h1>
          <h2 className="text-xs">#{props.Rank}</h2>
        </div>
      </CardTitle>
    </Card>
  );
}
