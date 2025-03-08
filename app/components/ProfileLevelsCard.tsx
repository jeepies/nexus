import { fetchSkillIcon, skills } from "~/services/runescape"

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
                
                return <>
                    <img src={`data:image/png;base64, ${fetchSkillIcon(skills[skillValue.id])}`} />
                </>
            })
        }
    </>
}