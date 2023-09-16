import Image from "next/image";
import placeHolderImage from "../../../public/place-holder.png";
import Link from "next/link";
import { MdLocalOffer } from "react-icons/md";

export default function introduction() {
  return (
    <>
      <section className="w-11/12 mx-auto">
        <h2 className="font-bold text-2xl text-center">
          Empowering African High School Students Unlock Your Potential, Explore
        </h2>
      </section>
      <section className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <p className="text-center md:text-left text-xl mb-8">
            Welcome to Tanbora, your gateway to a world of opportunities,
            knowledge, and connections. We believe that every high school
            student in Africa deserves the chance to explore their passions,
            connect with diverse communities, and chart their unique path to
            success.
          </p>
          <Link
            className="bg-primary-50 px-12 py-3 rounded-full text-white"
            href=""
          >
            Support us
          </Link>

          <Link
            className="bg-primary-50 px-12 py-3 h-12 rounded-full text-white ml-8"
            href=""
          >
            Join us
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={placeHolderImage}
            alt="hero image"
            className="rounded-md col-span-2 w-full h-48 object-cover"
          />
          <Image
            src={placeHolderImage}
            alt="hero image"
            className="rounded-md w-full"
          />
          <Image
            src={placeHolderImage}
            alt="hero image"
            className="rounded-md w-full"
          />
        </div>
      </section>
      <section className="w-11/12 mx-auto space-y-4">
        <h2 className="font-bold text-2xl text-center">Why choose Tanbora</h2>
        <p className="text-center">
          At Tanbora, we're committed to helping you reach your full potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-100 rounded-md p-4 text-center space-y-4">
            <h3 className="font-bold text-xl">Discover Your Passion</h3>
            <p className="mt-auto">
              Unleash your inner talents and interests with our passion
              discovery tools and personalized guidance.
            </p>
          </div>

          <div className="bg-gray-100 rounded-md p-4 text-center space-y-4">
            <h3 className="font-bold text-xl">
              Connect with Like-Minded Peers
            </h3>
            <p>
              Meet students from across Africa who share your interests and
              ambitions, and build lifelong friendships.
            </p>
          </div>

          <div className="bg-gray-100 rounded-md p-4 text-center space-y-4">
            <h3 className="font-bold text-xl">Expand Your Horizons</h3>
            <p>
              Dive into a world of knowledge with our diverse range of courses,
              resources, and events.
            </p>
          </div>

          <div className="bg-gray-100 rounded-md p-4 text-center space-y-4">
            <h3 className="font-bold text-xl">Lead and Learn</h3>
            <p>
              Join clubs, competitions, and extracurricular activities to
              develop leadership skills and have fun while doing it.
            </p>
          </div>
        </div>
      </section>
      <section className="w-11/12 mx-auto text-center space-y-4">
        <h3 className="font-bold text-xl m-2">Join Tanbora community todat</h3>
        <Link
          className="bg-primary-50 text-white px-12 py-3 rounded-full inline-block"
          href=""
        >
          Join us
        </Link>
      </section>
      <section className="w-11/12 mx-auto">
        <h2 className="font-bold text-2xl text-center">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className=" text-white bg-gradient-to-br from-primary-50 via-primary-50 to-primary-300 p-4 rounded-lg text-center space-y-6">
            <MdLocalOffer className="text-5xl mx-auto" />
            <h3 className="font-bold text-center text-xl">Passion Discovery</h3>
            <p>
              Take quizzes, surveys, and assessments to uncover your interests
              and strengths.
            </p>
          </div>
          <div className=" text-white bg-gradient-to-br from-primary-50 via-primary-50 to-primary-300 p-4 rounded-lg text-center space-y-6">
            <MdLocalOffer className="text-5xl mx-auto" />
            <h3 className="font-bold text-center text-xl">Passion Discovery</h3>
            <p>
              Take quizzes, surveys, and assessments to uncover your interests
              and strengths.
            </p>
          </div>
          <div className=" text-white bg-gradient-to-br from-primary-50 via-primary-50 to-primary-300 p-4 rounded-lg text-center space-y-6">
            <MdLocalOffer className="text-5xl mx-auto" />
            <h3 className="font-bold text-center text-xl">Passion Discovery</h3>
            <p>
              Take quizzes, surveys, and assessments to uncover your interests
              and strengths.
            </p>
          </div>
          <div className=" text-white bg-gradient-to-br from-primary-50 via-primary-50 to-primary-300 p-4 rounded-lg text-center space-y-6">
            <MdLocalOffer className="text-5xl mx-auto" />
            <h3 className="font-bold text-center text-xl">Passion Discovery</h3>
            <p>
              Take quizzes, surveys, and assessments to uncover your interests
              and strengths.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
