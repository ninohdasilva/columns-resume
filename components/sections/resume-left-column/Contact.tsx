import InfoBlock from "@/components/blocks/InfoBlock";
import InfoBlockContainerTitle from "@/components/blocks/InfoBlockContainerTitle";
import GitHubLogo from "@/components/ui/GitHubLogo";
import LinkedInLogo from "@/components/ui/LinkedInLogo";
import { useTranslations } from "next-intl"

export default function Contact() {

    const t = useTranslations('Data');

    return (
        <section className="contact rounded-xl ring-1 ring-foreground p-2 space-y-2 flex-grow">
            
            <InfoBlock start_link_description={t("contact1_description")} start_link_title={t("contact1_title")} start_link_url={t("contact1_url")}/>
            
            <div className="flex inline-block items-end space-x-2">
                <LinkedInLogo /> 
                <InfoBlock start_link_title={t("contact2_title")} start_link_url={t("contact2_url")}/>
            </div>

            <div className="flex inline-block items-end space-x-2">
                <GitHubLogo /> 
                <InfoBlock start_link_title={t("contact3_title")} start_link_url={t("contact3_url")}/>
            </div>

        </section>
    )
}