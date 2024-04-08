import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Contact() {
    return (
        <section className="contact rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Contact"} />
            <InfoBlock content="email"/>
            <InfoBlock content="twitter"/>
            <InfoBlock content="github"/>
        </section>
    )
}