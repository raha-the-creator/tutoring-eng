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

        <div className="flex items-start w-full lg:w-1/2">
          <SectionTitle pretitle="" title="👨‍🏫 Немного обо мне:">
            Меня зовут Раха, родом я из Казахстана 🇰🇿. Выпускник British
            Columbia Institute of Technology, сейчас работаю Quality Assurance
            Engineer в американской компании, специализирующейся на тестировании
            программного обеспечения для развлекательной индустрии. В свободное
            время играю на гитаре, хожу в спорт зал, делаю небольшие проекты.
          </SectionTitle>
        </div>
      </Container>

      <Benefits data={benefitOne} />


      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        Видео-знакомство со мной.
      </SectionTitle>

      <Video />

      {/* <Testimonials /> */}

      <SectionTitle pretitle="FAQ" title="Вопросы/ответы" className="max-w-2xl">
      
      </SectionTitle>

      <Faq />

      <Cta />

      <Footer />

      <PopupWidget />
    </>
  );
};

export default Home;
