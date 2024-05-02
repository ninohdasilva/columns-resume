import Image from 'next/image'

export default function ProjectBlock({title, link_title, link_url, content, technologies, image }:{title : string,  link_title : string, link_url : string, content : string, technologies : string, image : any}) {
    
    
    return (

        <div className="md:w-[303px] shadow-md rounded-xl ring-1 ring-foreground">
                <a href={link_url}>
                    <Image className="rounded-t-xl" src={image} alt={title}/>
                    <div className="p-5">
                        <h5 className="mb-2 text-lg font-extrabold tracking-tight">{title}</h5>
                        <p className="mb-3 dark:text-gray-300 text-xs font-mono">{content}</p>
                        <p className="text-xs font-mono italic pt-1.5 text-gray-500"> {technologies} </p>
                        <div className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center focus:ring-4 focus:outline-none">
                            {link_title}
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </div>
                        
                </div>
                </a>
            </div>
        
        
    )
}