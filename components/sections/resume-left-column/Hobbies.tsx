import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Hobbies() {
    return (
        <section className="hobbies rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Hobbies"} />
            <InfoBlock content="hobbie 1"/>
            <InfoBlock content="hobbie 2"/>
            <InfoBlock content="hobbie 3"/>
        </section>
    )
}