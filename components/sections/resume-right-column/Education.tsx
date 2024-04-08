import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Education() {
    return (
        <section className="education rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Education"} />
            <InfoBlock title="edu 1" subtitle= "subt edu 1" date="2020-2021" content="content edu 1"/>
            <InfoBlock title="edu 2" subtitle= "subt edu 2" date="2019-2020" content="content edu 2"/>
            <InfoBlock title="edu 3" subtitle= "subt edu 2" date="2016-2019" content="content edu 3"/>
        </section>
    )
}