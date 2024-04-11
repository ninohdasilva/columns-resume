import InfoBlock from "@/components/InfoBlock";
import InfoBlockContainerTitle from "@/components/InfoBlockContainerTitle";

export default function Projects() {
    return (

        <section className="resume flex flex-col mx-auto w-full max-w-2xl p-4 gap-4 print-force-new-page">
            
            <section className="project rounded-xl ring-1 ring-foreground p-2">
                <InfoBlockContainerTitle title={"Project 1"} />
                <InfoBlock link_title="link of the project" link_url="http://www.example.com" content={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras nec quam porttitor, venenatis orci eu, laoreet turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Cras aliquet ante id sapien blandit, finibus euismod neque placerat."," Quisque eget libero velit."]} />
            </section>

            <section className="project rounded-xl ring-1 ring-foreground p-2">
                <InfoBlockContainerTitle title={"Project 2"} />
                <InfoBlock link_title="link of the project" link_url="http://www.example.com" content={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras nec quam porttitor, venenatis orci eu, laoreet turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Cras aliquet ante id sapien blandit, finibus euismod neque placerat."," Quisque eget libero velit."]} />
            </section>

            <section className="project rounded-xl ring-1 ring-foreground p-2">
                <InfoBlockContainerTitle title={"Project 3"} />
                <InfoBlock link_title="link of the project" link_url="http://www.example.com" content={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras nec quam porttitor, venenatis orci eu, laoreet turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Cras aliquet ante id sapien blandit, finibus euismod neque placerat."," Quisque eget libero velit."]} />
            </section>

            <section className="project rounded-xl ring-1 ring-foreground p-2">
                <InfoBlockContainerTitle title={"Project 4"} />
                <InfoBlock link_title="link of the project" link_url="http://www.example.com" content={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras nec quam porttitor, venenatis orci eu, laoreet turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Cras aliquet ante id sapien blandit, finibus euismod neque placerat."," Quisque eget libero velit."]} />
            </section>
            
        </section>

    )
    
}