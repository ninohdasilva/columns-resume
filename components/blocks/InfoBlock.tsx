import Image from 'next/image'

export default function InfoBlock({title, subtitle, start_link_description, start_link_url, start_link_title, list_link_description, list_link_url, list_link_title,  date, content, technologies, image }:{title ?: string, subtitle ?: string, start_link_description ?: string, start_link_url ?: string, start_link_title ?: string, list_link_description ?: string, list_link_url ?: string, list_link_title ?: string, date ?: string, content ?: string | string[], technologies ?: string, image ? : string}) {
    return (

        
        <div className="info-block">



            <div className="info-block-title md:flex md:justify-between">
                
                <h2 className="text-sm font-bold">{title}</h2>
                <p className="shrink-0 text-sm pb-1">{date}</p>
            </div>
            <p className="font-semibold text-gray-500 dark:text-gray-300 text-xs font-mono">{subtitle}</p>
            
            
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

            { 
                start_link_title && (
                    <p className="text-xs font-mono">
                        {start_link_description}{' '}
                        <a className="underline decoration-solid hover:text-gray-500 dark:hover:text-gray-300 text-xs whitespace-pre" href={start_link_url}>
                            {start_link_title}
                        </a>
                    </p>
                )
            }
            
            { 
                list_link_url && (
                    <li className="text-xs font-mono">
                        {list_link_description}
                        <a className="underline decoration-solid hover:text-gray-500 dark:hover:text-gray-300 text-xs" href={list_link_url}>
                            {list_link_title}
                        </a>
                    </li>
                )
            }

           

            
            
            { 
                technologies && (
                    <p className="text-xs font-mono italic pt-1.5 text-gray-500"> {technologies} </p>
                )
            }

           


           
        </div>
    )
}