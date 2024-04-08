import Image from 'next/image'
import profile from "../../../images/profile.jpeg"

export default function Photo() {
    return (
        <Image className="profile-photo rounded-xl ring-1 ring-foreground" src={profile} alt={""} />
    )
}