import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "В чем плюсы моих занятий?",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Удобство",
      desc: "Обучение проходит дома, в комфортной для ученика обстановке. Нужен только компьютер, доступ в интернет и желание учиться.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Индивидуальный наставник",
      desc: "Помогу избежать ошибок и сделаю так, что скорость обучения будет в разы выше, чем при занятиях в группе.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Интерес к программированию",
      desc: "Моя программа построена так, что ребенок увидит, что программировать гораздо интереснее, чем играть.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Профориентация",
      desc: "Ребята могут в раннем возрасте понять, интересна ли им профессия программиста и мир IT.",
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
