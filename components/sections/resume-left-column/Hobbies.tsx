import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Hobbies() {
    return (
        <section className="hobbies rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Hobbies"} />
            <InfoBlock subtitle="hobbie 1" content={["description hobbie 1","description hobbie 1","description hobbie 1"]}/>
            <InfoBlock subtitle="hobbie 2" content="description hobbie 2"/>
            <InfoBlock subtitle="hobbie 3"/>
        </section>
    )
}