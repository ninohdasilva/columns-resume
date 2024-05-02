import InfoBlock from "@/components/blocks/InfoBlock";
import InfoBlockContainerTitle from "@/components/blocks/InfoBlockContainerTitle";
import { useTranslations } from "next-intl"
import ProjectBlock from "@/components/blocks/ProjectBlock";
import Image from "next/image";
import img1 from "../images/cat.jpg";
import img2 from "../images/fish.jpg";
import img3 from "../images/bird.jpg";



export default function Projects() {

    const t = useTranslations('Data');

    return (
        
        <section className="resume flex flex-col mx-auto  w-full max-w-2xl  print-force-new-page px-4">
            
            <h1 className="text-lg p-4 gap-0 font-extrabold">{t("projects")}</h1>
            
            <div className="flex flex-wrap justify-between pb-4 gap-4 md:px-0 text-left">

            <ProjectBlock title={t("project1_title")} image={img1} link_title={t("project1_link_title")} link_url={t("project1_link_url")} content={t("project1_content1")} technologies={t("project1_technologies")}/>

            <ProjectBlock title={t("project2_title")} image={img2} link_title={t("project2_link_title")} link_url={t("project2_link_url")} content={t("project2_content1")} technologies={t("project2_technologies")}/>

            </div>

            <div className="flex flex-wrap justify-center gap-4 md:px-0 text-left">

            <ProjectBlock title={t("project3_title")} image={img3} link_title={t("project3_link_title")} link_url={t("project3_link_url")} content={t("project3_content1")} technologies={t("project3_technologies")}/>

            </div>
            
            <div className="flex justify-center">
                <a className="text-lg button py-4 gap-8 font-normal text-center hover:font-extrabold underline" href={t("contact3_url")}>{t("see_more_projects")}</a>
            </div> 
        </section>

    )
    
}