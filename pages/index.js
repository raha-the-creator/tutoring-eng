import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

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
        <meta
          name="description"
          content="Tutoring for kids"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle=""
        title="👨‍🏫 Немного обо мне:">
        Меня зовут Раха, родом я из Казахстана 🇰🇿. Выпускник British Columbia Institute of Technology, сейчас работаю Quality Assurance Engineer в американской компании, специализирующейся на тестировании программного обеспечения для развлекательной индустрии. В свободное время играю на гитаре, хожу в спорт зал, делаю небольшие проекты.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video />

      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      {/* <Testimonials /> */}

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />

      <Cta />

      <Footer />

      <PopupWidget />
    </>
  );
}

export default Home;