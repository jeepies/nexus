import { skills } from "~/services/runescape";
import { Card, CardContent, CardTitle } from "./card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface SkillValue {
  level: number;
  xp: number;
  rank: number;
  id: number;
}

interface ProfileLevelsCardProps {
  SkillValues: Array<SkillValue>;
}

export default function ProfileLevelsCardProps(props: ProfileLevelsCardProps) {
  return (
    <Card>
      <CardTitle className="p-6">Skills</CardTitle>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Skill</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>XP</TableHead>
              <TableHead className="text-right">Daily XP</TableHead>
              <TableHead className="text-right">Monthly XP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.SkillValues.map((skill) => {
              return (
                <TableRow>
                  <TableCell>{skills[skill.id]}</TableCell>
                  <TableCell>{skill.level}</TableCell>
                  <TableCell>{skill.xp.toLocaleString()}</TableCell>
                  <TableCell className="text-right">Daily XP</TableCell>
                  <TableCell className="text-right">Monthly XP</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
