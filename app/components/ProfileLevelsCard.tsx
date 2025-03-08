import { skills } from "~/services/runescape"

interface SkillValue {
    level: number,
    xp: number,
    rank: number,
    id: number,
}

interface ProfileLevelsCardProps {
    SkillValues: Array<SkillValue>
}

export default function ProfileLevelsCardProps(props: ProfileLevelsCardProps) {


    return <>
        {
            props.SkillValues.forEach((skillValue) => {
                console.log(`${skills[skillValue.id]} - ${skillValue.level}`)
            })
        }
    </>
}