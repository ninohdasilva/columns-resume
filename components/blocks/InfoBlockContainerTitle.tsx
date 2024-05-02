import Image from 'next/image'

export default function InfoBlockContainerTitle({title, image}:{title: string, image ? : string}) {
    return (
        <div className="info-block-container-title">
            <h1 className="text-lg font-extrabold">{title}</h1>
        </div>
    )
}