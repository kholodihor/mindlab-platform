import React from "react"
import { cva, VariantProps } from "class-variance-authority"

interface ImageProps extends VariantProps<typeof imageStyles> {
  src: string
  size?: "small" | "large"
}

const imageStyles = cva("rounded", {
  variants: {
    size: {
      small: "max-w-[292px] max-h-[207px]",
      large: "max-w-[791px] max-h-[532px]"
    }
  },
  defaultVariants: {
    size: "small"
  }
})

const CertificateImg: React.FC<ImageProps> = ({ src, size }) => {
  return <img src={src} alt="Certificate" className={imageStyles({ size })} />
}

export default CertificateImg
