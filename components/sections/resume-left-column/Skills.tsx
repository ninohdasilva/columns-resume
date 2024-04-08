import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Skills() {
    return (
        <section className="skills rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Skills"} />
            <InfoBlock content="skill 1"/>
            <InfoBlock content="skill 2"/>
            <InfoBlock content="skill 3"/>
        </section>
    )
}