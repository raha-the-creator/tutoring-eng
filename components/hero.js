import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const HeroEng = () => {
  return (
    <>
      <Container className="flex flex-wrap mx-2">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
            Open the world of programming and design to children with an "Bilim" Online Tutoring
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Is your child constantly on the phone? Don't worry, your child is with me
               will start creating games and developing programs. In anticipation
               New Year, open the world of IT for your children with courses on
               programming and design!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://t.me/rahatherock"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Sign-up!
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroEng;
