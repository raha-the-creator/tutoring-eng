import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

import { FaWhatsappSquare, FaFacebook, FaTelegram } from "react-icons/fa";

export default function Footer() {

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Онлайн-школа "Bilim"</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              🌏Онлайн-школа "Bilim" — программирование для детей от 5 до 17
              лет! Ребенок постоянно сидит в телефоне? Не переживайте, со мной
              он начнет создавать игры и писать программы!
            </div>
          </div>

          <div className="">
            <div>Follow me</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://www.facebook.com/profile.php?id=100012867517197&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=16043797287"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Whats App</span>
                <FaWhatsappSquare />
              </a>
              
              <a href="https://t.me/rahatherock" target="_blank" rel="noopener">
                <span className="sr-only">Telegram</span>
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </Container>
      {/* Do not remove this */}
      {/* <Backlink /> */}
    </div>
  );
}

