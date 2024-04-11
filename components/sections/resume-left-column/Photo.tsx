import Image from 'next/image'
import profile from "../../../images/profile.jpeg"

export default function Photo() {
    return (
        // <div className='flex place-content-center p-4 ring-1 ring-foreground rounded-xl bg-white'>
        //     <Image className="profile-photo rounded-full" src={profile} alt={""} height={100} width={100}/>
        // </div>
        <Image className="profile-photo rounded-xl" src={profile} alt={""}/>
    )
}