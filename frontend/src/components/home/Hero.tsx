import Image from 'next/image'
import placeHolder from '../../../public/place-holder.png'
export default function Hero(){
    return (
        <section className=" mt-10">
            <div className=" text-center md:w-1/2 space-y-6">
                <h1 className="font-bold text-3xl">
                    Empowering African High School Students
                </h1>
                <p className="font-medium text-xl">Unlock Your Potential, Explore Your Passions, and Shape Your Future</p>
            </div>
            <div>
                <Image
                    src={placeHolder}
                    alt = 'hero image'
                    className='w-full'
                    />
            </div>
        </section>
    )
}