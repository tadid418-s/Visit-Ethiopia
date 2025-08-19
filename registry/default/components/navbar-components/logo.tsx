import Image from "next/image"

export default function Logo() {
  return (
    <Image 
      src="/hilink-logo.svg" 
      alt="Visit Ethiopia Logo" 
      width={74} 
      height={29}
      className="h-8 w-auto"
    />
  )
}
