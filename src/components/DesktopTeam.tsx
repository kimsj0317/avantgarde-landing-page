import type { CSSProperties, ReactNode } from "react";
import { ResponsiveBox } from "./ResponsiveBox"
import styles from "./DesktopTeam.module.scss";

export type TeamMember = {
    imageUrl: string;
    name: string;
    description: ReactNode;
    backgroundGradientStartColor: string;
    backgroundGradientEndColor: string;
};

export const members: TeamMember[] = [
    {
        name: "Tyler Lim",
        backgroundGradientStartColor: "#B045E0",
        backgroundGradientEndColor: "#59E7EC",
        imageUrl: ".//team-01.png",
        description: (
            <>
                Founder / CEO
                <ul>
                    <li>APAC Head of BD/CD at Global Stealth Company</li>
                    <li>Founder/CEO at Simple Kitchen (Exited ~USD 10M)</li>
                </ul>
            </>
        ),
    },
    {
        name: "Helen Cho",
        backgroundGradientStartColor: "#5BE5EB",
        backgroundGradientEndColor: "#CE8BB4",
        imageUrl: ".//team-02.png",
        description: (
            <>
                Founder / CTO
                <ul>
                    <li>Software Engineer at Google</li>
                    <li>Technology Analyst at Morgan Stanley</li>
                    <li>Technology Analyst at Merrill Lynch</li>
                </ul>
            </>
        ),
    },
    {
        name: "Jung-woo Ha",
        backgroundGradientStartColor: "#CE8BB4",
        backgroundGradientEndColor: "#FC4238",
        imageUrl: ".//team-03.png",
        description: (
            <>
                Artist
                <ul>
                    <li>Main actor of 'Along with the Gods' and 'Narco-Saints'</li>
                    <li>Actor with a cumulative 115 million+ viewers</li>
                    <li>
                        Participated in more than 30 exhibitions in Paris, LA, and Seoul as
                        a painter
                    </li>
                </ul>
            </>
        ),
    },
    {
        name: "Andrew Choi",
        backgroundGradientStartColor: "#FD4037",
        backgroundGradientEndColor: "#603FE4",
        imageUrl: ".//team-04.png",
        description: (
            <>
                Advisor
                <ul>
                    <li>Founder/CEO at SuperNormal</li>
                </ul>
            </>
        ),
    },
    {
        name: "Thomas",
        backgroundGradientStartColor: "#6443E2",
        backgroundGradientEndColor: "#CEA88C",
        imageUrl: ".//team-05.png",
        description: <>CSO</>,
    },
    {
        name: "JJ",
        backgroundGradientStartColor: "#CDA78D",
        backgroundGradientEndColor: "#AF45DE",
        imageUrl: ".//team-06.png",
        description: <>Head of Operations</>,
    },
];

export function DesktopTeam() {
    return (
        <div
            style={{
                display: "grid",
                gap: "60rem",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "144rem",
            }}
        >
            {members.map((member, index) => {
                return <DesktopTeamItem key={member.name} member={member} />;
            })}
        </div>
    );
}

function DesktopTeamItem({ member }: { member: TeamMember }) {
    return (
        <div>
            <ResponsiveBox
                width={540}
                height={580}
                className={styles.gradientBackground}
                style={
                    {
                        "--gradient-start": member.backgroundGradientStartColor,
                        "--gradient-end": member.backgroundGradientEndColor,
                    } as CSSProperties
                }
            >
                <img
                    src={member.imageUrl}
                    style={{
                        position: "absolute",
                        top: "10rem",
                        left: "10rem",
                        right: "10rem",
                        bottom: "10rem",
                        width: "calc(100% - 20rem)",
                        height: "calc(100% - 20rem)",
                    }}
                />
            </ResponsiveBox>
            <div className={styles.profileName}>{member.name}</div>
            <div className={styles.profile}>{member.description}</div>
        </div>
    );
}
