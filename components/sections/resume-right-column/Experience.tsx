import InfoBlock from "@/components/blocks/InfoBlock";
import InfoBlockContainerTitle from "@/components/blocks/InfoBlockContainerTitle";
import { useTranslations } from "next-intl"

export default function Experience() {

    const t = useTranslations('Data');
 
    return (
        <section className="experience rounded-xl ring-1 ring-foreground p-2 space-y-5 flex-grow">
            <InfoBlockContainerTitle title={t("experiences")} />
            <InfoBlock title={t("job1_title")} subtitle={t("job1_subtitle")}  date={t("job1_date")} content={[t("job1_content1"),t("job1_content2"),t("job1_content3"),t("job1_content4")]} technologies={t("job1_technologies")}/>
            <InfoBlock title={t("job2_title")} subtitle={t("job2_subtitle")}  date={t("job2_date")} list_link_description={t("job2_list_link_description")} list_link_title={t("job2_list_link_title")} list_link_url={t("job2_list_link_url")} content={[t("job2_content1")]}/>
            <InfoBlock subtitle={t("job3_subtitle")}  list_link_description={t("job3_list_link_description")} list_link_title={t("job3_list_link_title")} list_link_url={t("job3_list_link_url")} content={[t("job3_content1")]} technologies={t("job3_technologies")}/>
            <InfoBlock title={t("job4_title")} subtitle={t("job4_subtitle")}  date={t("job4_date")} list_link_description={t("job4_list_link_description")} list_link_title={t("job4_list_link_title")} list_link_url={t("job4_list_link_url")} content={[t("job4_content1")]} technologies={t("job4_technologies")} />
        </section>
    )
}