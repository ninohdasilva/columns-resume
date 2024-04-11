export default function InfoBlock({title, subtitle, link_title, link_url, date, content}:{title ?: string, subtitle ?: string, link_url ?: string, link_title ?: string, date ?: string, content ?: string}) {
    return (
        <div className="info-block">
            <div className="info-block-title flex justify-between">
                <h2 className="text-1xl font-bold">{title}</h2>
                <p className="shrink-0">{date}</p>
            </div>
            <p className="font-semibold">{subtitle}</p>
            <a className="underline decoration-dotted hover:decoration-solid" href={link_url}>
                {link_title}
            </a>
            <p>{content}</p>
        </div>
    )
}