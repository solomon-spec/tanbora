import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillTelephoneFill} from "react-icons/bs"
export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className=" p-4 grid md:grid-cols-3 gap-6">
        <div className="md:border-r-[1px] border-gray-500 p-2">
          <p>
            Discover your true potential with tanbora, the empowering online hub
            where African high school students explore their passions, connect
            with peers, and shape their brighter future.
          </p>
        </div>
        <div className="p-2 md:border-r-[1px] border-gray-500">
          Stay connected with us on our social media platforms for the latest
          updates, events, and stories from our empowered community.
          <div className="flex justify-center gap-6 mt-4">
            <BsFacebook className="inline-block text-3xl " />
            <BsInstagram className="inline-block text-3xl" />
            <BsYoutube className="inline-block text-3xl" />
          </div>
        </div>
        <p className="p-2 break-words">
          Have questions or need assistance? Reach out to our dedicated support
          team at <br />
          <span className="font-semibold break-words"><HiOutlineMail className='inline-block text-2xl mr-4'/>customersupport@tanbora.com </span><br />
          <span className="font-semibold"><BsFillTelephoneFill className='inline-block text-2xl mr-4'/>+251900000000</span>
          
        </p>
      </div>
      <div>
        <p className="text-center text-gray-600">&copy; All right reserved</p>
      </div>
    </footer>
  );
}
