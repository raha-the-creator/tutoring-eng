import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/web.png";
import userTwoImg from "../public/img/literacy.png";
import userThreeImg from "../public/img/scratch.png";
import userFourImg from "../public/img/figma.png";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userTwoImg}
              name="Компьютерная
              грамотность"
              title="Microsoft Office + Safe Internet"
            />

            <p className="text-lg leading-normal mt-2">
              Расскажу про <Mark>основные программы </Mark> и настройки в
              операционной системе. Научу основам компьютерной грамотности.{" "}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userThreeImg}
              name="Scratch"
              title="Основы программирования"
            />

            <p className="text-lg leading-normal mt-2">
              Если тебе <Mark>7 — 11 лет</Mark> и у тебя пока что нет опыта в
              программировании — записывайся на этот курс!{" "}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userFourImg}
              name="Figma"
              title="Графический дизайн"
            />

            <p className="text-lg leading-normal">
              Научу создавать красивые иллюстрации в профессиональном <Mark>редакторе Figma</Mark>.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userOneImg}
              name="Web Development"
              title="Создание сайтов Front-end разработка"
            />

            <p className="text-lg leading-normal mt-2">
              Продвинутый курс для тех, кто хочет быть{" "}
              <Mark>веб-разработчиком</Mark> и создавать современные сайты.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-4 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="150"
          height="150"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-2xl font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
