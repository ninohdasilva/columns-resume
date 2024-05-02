import InfoBlock from "@/components/blocks/InfoBlock";
import InfoBlockContainerTitle from "@/components/blocks/InfoBlockContainerTitle";
import { useTranslations } from "next-intl"

export default function Skills() {

    const t = useTranslations('Data');

    return (
        <section className="skills rounded-xl ring-1 ring-foreground p-2 space-y-2 flex-grow">
            <InfoBlockContainerTitle title={t("skills")} />
            <InfoBlock subtitle={t("skills1_subtitle")} content={t("skills1_content1")}/>
            <InfoBlock subtitle={t("skills2_subtitle")} content={t("skills2_content1")}/>
            <InfoBlock subtitle={t("skills3_subtitle")} content={t("skills3_content1")}/>
            <InfoBlock subtitle={t("skills4_subtitle")} content={t("skills4_content1")}/>
            <InfoBlock subtitle={t("skills5_subtitle")} content={[t("skills5_content1"),t("skills5_content2")]}/>
        </section>
    )
}