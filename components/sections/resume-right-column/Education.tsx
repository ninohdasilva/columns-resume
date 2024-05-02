import InfoBlock from "@/components/blocks/InfoBlock";
import InfoBlockContainerTitle from "@/components/blocks/InfoBlockContainerTitle";
import { useTranslations } from "next-intl"

export default function Education() {

    const t = useTranslations('Data');

    return (
        <section className="education rounded-xl ring-1 ring-foreground p-2 space-y-3">
            <InfoBlockContainerTitle title={t("education")} />
            <InfoBlock title={t("education1_title")} date={t("education1_date")} subtitle={t("education1_subtitle")}  technologies={t("education1_technologies")}/>
            <InfoBlock title={t("education2_title")} date={t("education2_date")} subtitle={t("education2_subtitle")} />
            <InfoBlock title={t("education3_title")} date={t("education3_date")} subtitle={t("education3_subtitle")}/>
            <InfoBlock title={t("education4_title")} date={t("education4_date")} subtitle={t("education4_content1")}  technologies={t("education4_technologies")}/>
        </section>
    )
}