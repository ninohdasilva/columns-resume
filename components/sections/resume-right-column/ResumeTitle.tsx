import { useTranslations } from "next-intl"

export default function ResumeTitle() {

    const t = useTranslations('Data')
    return (
        <div className="resume-title text-center rounded-xl ring-1 ring-foreground p-2">
            <h1 className="text-5xl">{t("resume")} {t("title")}</h1>
            <h2>Resume subtitle</h2>
        </div>
    )
}