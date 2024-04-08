import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function About() {
    return (
        <div className="about rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"About"} />
            <InfoBlock content="a short text about me"/>
        </div>
    )
}