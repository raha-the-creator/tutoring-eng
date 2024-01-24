import Head from "next/head";
import Image from "next/image";
import Container from "../components/container";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import heroImg from "../public/img/me.png";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>"Bilim" tutoring for kids</title>
        <meta name="description" content="Tutoring for kids" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />

      <Hero />

      <Container className="flex flex-wrap mx-2">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="400"
              height="400"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>

        <div className=" items-start w-full lg:w-1/2" id="aboutme">
          <SectionTitle pretitle="" title="👨‍🏫 About me:">
          My name is Raha, I'm from Kazakhstan 🇰🇿. A graduate of the British Columbia Institute of Technology, I now work as a Quality Assurance Engineer in an American company specializing in software testing for the entertainment industry. In my free time, I play the guitar, go to the gym, and do small projects.
          Send me message!
          </SectionTitle>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="tel: +16043797287"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Send me text!
              </a>
            </div>
          {/* <p><a href="tel: +16043797287">Send me message! (604) 379 72 87</a></p> */}
        </div>
      </Container>

      <div id="benefits">
        <Benefits data={benefitOne} />
      </div>

      <SectionTitle
        pretitle="Introduction"
        title="Video introduction for future students"
      ></SectionTitle>

      <div id="video">
        <Video />
      </div>

      <SectionTitle
        pretitle=""
        title="My courses"
        className="max-w-2xl"
      ></SectionTitle>
      <Testimonials />
      

      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
        className="max-w-2xl"
      ></SectionTitle>

      <div id="faq">
        <Faq />
      </div>

      <Cta />

      <Footer />

      <PopupWidget />
    </>
  );
};

export default Home;
