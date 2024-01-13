export default function ImageExpanded({children}: {children: any}) {
    return (
        <div className="image-expanded">
            <div className="image-wrapper">
                {children}
            </div>
        </div>
    )
}