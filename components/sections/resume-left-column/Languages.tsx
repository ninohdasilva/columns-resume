import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Languages() {
    return (
        <section className="languages rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Languages"} />
            <InfoBlock content="language 1"/>
            <InfoBlock content="language 2"/>
            <InfoBlock content="language 3"/>
        </section>
    )
}