import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa'

const ShareButtons = ({ recipe }) => {
  const shareUrl = `${window.location.origin}/recipe/${recipe.id}`

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    alert('Link copied!')
  }

  return (
    <div className="flex gap-4 mt-4">
      <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 text-2xl" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-600 text-2xl" />
      </a>
      <button onClick={copyLink}>
        <FaLink className="text-gray-600 text-2xl" />
      </button>
    </div>
  )
}
export default ShareButtons