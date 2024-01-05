export default function TruncateText({ text, maxLength }) {
    if (text.length <= maxLength) {
        return (
            <span>{text}</span>
        )
    }
  
    const truncatedText = text.slice(0, maxLength) + '...'
  
    return (
        <span>{truncatedText}&nbsp;</span>
    )
}