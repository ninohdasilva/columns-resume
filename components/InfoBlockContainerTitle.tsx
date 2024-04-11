export default function InfoBlockContainerTitle({title}:{title: string}) {
    return (
        <div className="info-block-container-title">
            <h1 className="text-xl md:text-2xl font-extrabold">{title}</h1>
        </div>
    )
}