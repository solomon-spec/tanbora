import Image from 'next/image'
import placeHolder from '../../../public/place-holder.png'
import heroImage from '@/assets/hero-image.jpg'
export default function Hero(){
    return (
        <section className="font-poppins mt-10 w-11/12 mx-auto space-y-6 grid grid-cols-1 place-items-center md:grid-cols-2">
            <div className=" text-center md:text-left space-y-6">
                <h1 className="font-bold text-3xl">
                    Empowering African High School Students
                </h1>
                <p className="font-medium text-xl">Unlock Your Potential, Explore Your Passions, and Shape Your Future</p>
            </div>
            <div className='mx-auto w-full'>
                <Image
                    src={heroImage}
                    alt = 'hero image'
                    className='rounded-md block mx-auto w-full'
                    />
            </div>
        </section>
    )
}