export default function InfoBlock({title, subtitle, date, content}:{title ?: string, subtitle ?: string, date ?: string, content ?: string}) {
    return (
        <div className="info-block">
            <div className="info-block-title flex justify-between">
                <h2 className="text-1xl font-bold">{title}</h2>
                <p className="shrink-0">{date}</p>
            </div>
            <p className="font-semibold">{subtitle}</p>
            <p>{content}</p>
        </div>
    )
}