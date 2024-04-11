export default function InfoBlock({title, subtitle, link_title, link_url, date, content}:{title ?: string, subtitle ?: string, link_url ?: string, link_title ?: string, date ?: string, content ?: string | string[]}) {
    return (
        <div className="info-block">
            <div className="info-block-title flex justify-between">
                <h2 className="text-base md:text-lg font-bold">{title}</h2>
                <p className="shrink-0 text-sm">{date}</p>
            </div>
            <p className="font-semibold text-gray-500 dark:text-gray-300 text-sm font-mono">{subtitle}</p>
            <a className="underline decoration-solid hover:text-gray-500 dark:hover:text-gray-300 text-xs md:text-sm font-mono" href={link_url}>
                {link_title}
            </a>

            {   
                Array.isArray(content) ? (
                    content.map(
                        (paragraph, index) => (
                            <li className="text-xs font-mono" key={index}>{paragraph}</li>
                        )
                    )
                ) 
                : (
                    <p className="text-xs font-mono">{content}</p>
                )
            }

        </div>
    )
}