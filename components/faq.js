import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl whitespace-pre-line">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Where are you located?",
    answer: "I have an online school with individual lessons, I work wherever there is internet. \n\nThis is better than regular classes because:\n\n⚡ individual lessons, there is only a student and a teacher; \n\n ⚡ the teacher sees what the student is doing throughout the lesson - no games during the lesson, except those that we create during the lesson; \n\n ⚡ the student is not distracted by conversations or games with other children, but can communicate with the teacher; \n\n ⚡ no need to wait or catch up with other students, you can study at a speed that is comfortable for the student; \n\n⚡ individual schedule, and if you missed a lesson, then continue exactly where you left off last time.",
  },
  {
    question: "What kind",
    answer: "Если простыми словами, то если на компьютере запускаются игры и компьютерные программы без тормозов, то для занятий подходит. Если говорить техническими характеристиками, то вполне хватит 4-х ядерного процессора с тактовой частотой 2.5 ГГц и более, 8гб оперативной памяти, жесткий диск (лучше SSD) и видеокарта не важны.",
  },
  {
    question: "Можно ли отменить или перенести урок?",
    answer:
      "Да. Главное предупредите за 6 часов до урока. Если преподаватель пришел на урок, а студента нет и меня не предупредили, то я грущу, звоню родителям и засчитываю занятие как проведенное.",
  },
  {
    question: "Сколько длятся курсы?",
    answer:
      "У меня индивидуальные уроки со студентами и длительность курса не фиксированная, так как: \n\n\
      - студенты могут заниматься с разной скоростью; \n\n\
      - кто-то занимается 1 раз в неделю, кто-то 2, а кто-то 3 раза в неделю; \n\n\
      - кому-то выдаем домашнее задание, а кому-то нет (например студент и так загружен кружками и секциями); \n\n\
      - бывают отклонения от программы, студент хочет сделать свою игру - преподаватель вместе с ним будет её делать. \n\n\
      \n\n\
      Как правило ребята приходят ко мне и начинают с программы для начинающих, после чего переходят на более сложные программы. Если мы видим, что материал дается студенту слишком легко, то мы переводим его быстрее на более сложную программу."
  },
];


export default Faq;