import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Contact() {
    return (
        <section className="contact rounded-xl ring-1 ring-foreground p-2">
            <InfoBlockContainerTitle title={"Contact"} />
            <InfoBlock link_title="email@example.com" link_url="mailto:email@example.com"/>
            <InfoBlock link_title="twitter" link_url="https://example.com/"/>
            <InfoBlock link_title="github" link_url="https://example.com/"/>
        </section>
    )
}