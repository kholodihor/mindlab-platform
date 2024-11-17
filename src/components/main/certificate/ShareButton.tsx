import { Share2 } from "lucide-react"
import { LinkedinShareButton } from "react-share"

const ShareButton = ({ link }: { link: string }) => {
  return (
    <LinkedinShareButton
      url={link}
      title="Check this out!"
      summary="Here's an interesting link I wanted to share."
      style={{
        width: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        backgroundColor: "#191a1f",
        padding: "3px",
        border: "1px solid #C0ED3B"
      }}
    >
      <Share2 size={22} color="#EAEAEB" strokeWidth={2} />
    </LinkedinShareButton>
  )
}

export default ShareButton
