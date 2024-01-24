import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  RocketLaunchIcon,
  PuzzlePieceIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "What are the advantages of my classes?",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Convenience",
      desc: "Learning takes place at home, in a comfortable environment for the student. All you need is a computer, Internet access and a desire to learn.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Individual mentor",
      desc: "I will help you avoid mistakes and make sure that the speed of learning will be many times higher than when studying in a group.",
      icon: <RocketLaunchIcon />,
    },
    {
      title: "Spark interest in programming",
      desc: "My program is built in such a way that the child will see that programming is much more interesting than playing.",
      icon: <PuzzlePieceIcon />,
    },
    {
      title: "Career guidance",
      desc: "Children can understand at an early age whether they are interested in the profession of a programmer and the world of IT.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
