import InfoBlock from "@/components/blocks/InfoBlock";
import InfoBlockContainerTitle from "@/components/blocks/InfoBlockContainerTitle";

export default function Languages() {
    return (
        <section className="languages rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Languages"} />
            <InfoBlock subtitle="language 1"/>
            <InfoBlock subtitle="language 2"/>
            <InfoBlock subtitle="language 3"/>
        </section>
    )
}