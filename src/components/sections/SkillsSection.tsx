import { Armchair, Clock8 } from "lucide-react";
import { DockerIcon, GoIcon, JavaIcon, JavaScriptIcon, MongoBDIcon, MySQLIcon, NextIcon, NodeIcon, PostgreSQLIcon, PythonIcon, ReactIcon, TypeScriptIcon, VueIcon } from "../../../public/images/icons";
import { ReactNode } from "react";
import { Heading } from "../blog/Heading";
import { getTranslations } from "next-intl/server";

type Skill = {
    id: string;
    name: string;
    time?: string;
    textColor?: string;
    bgColor: string;
    icon?: ReactNode;
}

type Skills = Array<Skill>;

const SkillsSection = async () => {
    const t = await getTranslations("HomePage.SkillsSection")

    const languages: Skills = [
        { id: "js", name: "JavaScript", time: "8", bgColor: "#F0DB4F", icon: <JavaScriptIcon textColor="#000" /> },
        { id: "ts", name: "TypeScript", time: "8", bgColor: "#3178c6", icon: <TypeScriptIcon textColor={"#000"} /> },
        { id: "java", name: "Java", time: "4", bgColor: "#744e3b", icon: <JavaIcon textColor="#fff" /> },
        { id: "node", name: "Node.js", time: "6", bgColor: "#6cc24a", icon: <NodeIcon textColor="#000" /> },
        { id: "python", name: "Python", time: "1", bgColor: "#306998", icon: <PythonIcon textColor="#fff" /> },
        { id: "go", name: "Go", time: "0", bgColor: "#29BEB0", icon: <GoIcon textColor={"#000"} /> },
    ];

    const databases: Skills = [
        { id: "mongo", name: "MongoDB", time: "5", bgColor: "#29BEB0", icon: <MongoBDIcon textColor="#000" /> },
        { id: "postgreSQL", name: "PostgreSQL", time: "3", bgColor: "#29BEB0", icon: <PostgreSQLIcon textColor="#000" /> },
        { id: "mysql", name: "MySQL", time: "2", bgColor: "#29BEB0", icon: <MySQLIcon textColor="#000" /> },
    ];

    const tools: Skills = [
        { id: "react", name: "React", time: "5", bgColor: "#61dbfb", icon: <ReactIcon textColor="#000" /> },
        { id: "nextjs", name: "Next.js", time: "4", bgColor: "#000", icon: <NextIcon textColor="#fff" /> },
        { id: "vue", name: "Vue", time: "2", bgColor: "#41B883", icon: <VueIcon textColor="#000" /> },
        { id: "express", name: "Express.js", time: "4", bgColor: "#6cc24a", icon: <NodeIcon textColor="#000" /> },
        { id: "nest", name: "Nest.js", time: "1", bgColor: "#ea2845", icon: <NodeIcon textColor="#fff" /> },
        { id: "docker", name: "Docker", time: "4", bgColor: "#0db7ed", icon: <DockerIcon textColor="#fff" /> },
    ];

    return (
        <div className="w-full bg-[#011627] text-gray-200 flex flex-col items-center py-10 px-4">
            <Heading level={2}>{t("title")}</Heading>
            <div className="w-full max-w-screen-md mt-6 space-y-10">
                <SkillGroup title={t("languages")} skills={languages} />
                <SkillGroup title={t("databases")} skills={databases} />
                <SkillGroup title={t("tools")} skills={tools} />
            </div>
        </div>
    );
};

const SkillGroup = ({ title, skills }: { title: string; skills: Skills }) => (
    <div>
        <Heading className="pb-2" level={4}>{title}</Heading>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
            {skills.map(skill => <SkillItem key={skill.id} skill={skill} />)}
        </div>
    </div>
);

const SkillItem = async ({ skill }: { skill: Skill }) => {
    const t = await getTranslations("HomePage.SkillsSection");
    return (
        <div className="flex items-center bg-blue-950 px-4 py-3 rounded-xl gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: skill.bgColor }}>
                {skill.icon}
            </div>
            <div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold">{skill.name}</h4>
                {skill.time
                    ? skill.time !== "0"
                        ? <p className="flex items-center gap-1 text-sm"><Clock8 className="w-4 h-4" /> + {skill.time} {t("years")}</p>
                        : <p className="text-sm">{t("getting-started")}</p>
                    : null}
            </div>
        </div>
    );
};

export default SkillsSection;
