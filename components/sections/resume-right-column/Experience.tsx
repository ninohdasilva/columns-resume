import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Experience() {
    return (
        <section className="experience rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Experience"} />
            <InfoBlock title="Exp 1" subtitle= "subt exp 1" date="2023-present" content="content exp 1"/>
            <InfoBlock title="Exp 2" subtitle= "subt exp 2" date="2022-2023" content="content exp 2"/>
            <InfoBlock title="Exp 3" subtitle= "subt exp 2" date="2021-2022" content="content exp 3"/>
        </section>
    )
}