"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight } from "lucide-react";
import type { RefObject, ChangeEvent, FormEvent } from "react";
import {BrowserView, MobileView} from "react-device-detect";


interface ContactSectionProps {
  divRef: RefObject<HTMLDivElement | null>;
  formData: {
    name: string;
    email: string;
    message: string;
  };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent) => void;
}

export default function ContactSection({
  divRef,
  formData,
  handleChange,
  handleSubmit,
}: ContactSectionProps) {
  return (
    <>
      <BrowserView>
        <div
          ref={divRef}
          className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
        >
          <div className="max-w-xl w-full mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
                Mandame un mensaje !
              </h1>
              <p className="text-gray-600">
                Tienes alguna pregunta o propuesta, o simplemente quieres
                saludar? adelante
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex-1 space-y-2">
                    <label htmlFor="name" className="text-gray-500 text-sm">
                      Tu nombre
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-purple-600"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <label htmlFor="email" className="text-gray-500 text-sm">
                      Tu Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-purple-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-500 text-sm">
                    Tu mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px] border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-purple-600 resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  type="submit"
                  className="group relative border-[#4831D4] text-[#4831D4] rounded-none h-[56px] w-[250px] overflow-hidden transition-colors duration-300 ease-in-out"
                >
                  <span className="absolute inset-0 w-0 bg-[#4831D4] transition-all duration-500 ease-in-out group-hover:w-full" />
                  <span className="uppercase text-sm tracking-wider font-medium text-[#4831D4] group-hover:text-white relative z-10 transition-colors duration-300">
                    Envia!
                  </span>
                  <MoveRight className="h-4 w-4 text-[#4831D4] group-hover:text-white relative z-10 transition-colors duration-300" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div
          ref={divRef}
          className="min-h-screen bg-gray-50 flex items-center justify-center p-6"
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#4831D4] mb-3">
                Mandame un mensaje !
              </h1>
              <p className="text-gray-600 text-sm">
                Tienes alguna pregunta o propuesta, o simplemente quieres
                saludar? adelante
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name-mobile"
                    className="text-gray-500 text-sm"
                  >
                    Tu nombre
                  </label>
                  <Input
                    type="text"
                    id="name-mobile"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-[#4831D4]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email-mobile"
                    className="text-gray-500 text-sm"
                  >
                    Tu Email
                  </label>
                  <Input
                    type="email"
                    id="email-mobile"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-[#4831D4]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message-mobile"
                    className="text-gray-500 text-sm"
                  >
                    Tu mensaje
                  </label>
                  <Textarea
                    id="message-mobile"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hola, me encantó tu portafolio y el estilo de tus diseños. Estoy buscando a alguien que me ayude a desarrollar la identidad visual de una marca personal que estoy lanzando. ¿Tienes disponibilidad para una reunión esta semana? ¡Gracias!"
                    className="w-full min-h-[150px] border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-[#4831D4] resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <Button
                  variant="outline"
                  type="submit"
                  className="border border-[#4831D4] text-[#4831D4] rounded-none py-2 px-10 flex items-center gap-2"
                >
                  <span className="uppercase text-sm tracking-wider font-medium">
                    ENVÍA!
                  </span>
                  <MoveRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </MobileView>
    </>
  );
}
