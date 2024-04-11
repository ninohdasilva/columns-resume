import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Skills() {
    return (
        <section className="skills rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Skills"} />
            <InfoBlock subtitle="skill 1"/>
            <InfoBlock subtitle="skill 2"/>
            <InfoBlock subtitle="skill 3"/>
        </section>
    )
}