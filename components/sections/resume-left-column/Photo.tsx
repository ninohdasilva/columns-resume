import Image from 'next/image'
import profile from "../../../images/labrador.jpg"

export default function Photo() {
    return (
        <Image className="profile-photo rounded-xl flex-grow" src={profile} alt={""}/>
    )
}