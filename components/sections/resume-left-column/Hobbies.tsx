import InfoBlock from "@/components/blocks/InfoBlock";
import InfoBlockContainerTitle from "@/components/blocks/InfoBlockContainerTitle";
import { useTranslations } from "next-intl"

export default function Hobbies() {

    const t = useTranslations('Data');

    return (
        <section className="hobbies rounded-xl ring-1 ring-foreground p-2 space-y-2 flex-grow">

            <InfoBlockContainerTitle title={t("hobbies")} />

            <InfoBlock title={t("hobbies1_title")}/>

            <InfoBlock subtitle={t("hobbies2_subtitle")} content={t("hobbies2_content")} />

            <InfoBlock subtitle={t("hobbies3_subtitle")} content={t("hobbies3_content")}/>

            <InfoBlock content={[t("hobbies4_content1"),t("hobbies4_content2"),t("hobbies4_content3")]} />

            <InfoBlock subtitle={t("hobbies5_subtitle")} content={t("hobbies5_content")} />

        </section>
    )
}