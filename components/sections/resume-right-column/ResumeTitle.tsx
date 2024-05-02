import { useTranslations } from "next-intl"

export default function ResumeTitle() {

    const t = useTranslations('Data')
    return (
        <div className="resume-title text-center rounded-xl ring-1 ring-foreground p-2 flex-grow">
            <h1 className="text-sm font-bold">{t("name")}</h1>
            <h2 className="text-xs">{t("title")}</h2>
        </div>
    )
}