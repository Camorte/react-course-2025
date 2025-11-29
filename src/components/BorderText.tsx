function BorderText({ borderText }: { borderText: string }) {
    return (
        <div className="border-box">
            <p className="styled-text">{borderText}</p>
        </div>
    )
}

export default BorderText
