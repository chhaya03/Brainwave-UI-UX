import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-[#FFFF]/10
          rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="smartest AI"
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 text-3xl">
                Smartest AI
              </h2>
              <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-[#ADA8C3]">
                Brainwave unlocks the potential of AI-powered applications{" "}
              </p>
              <ul className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem]">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-start py-4 border-t border-[#252134]"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className="absolute left-4 right-4 bottom-4 border-[#15131D]
            border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 "
            />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div
              className="relative min-h-[39rem] border border-[#FFFF]/2 rounded-3xl
            overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b
              from-[#0E0C15]/10 to-[#0E0C15]/90 lg:p-15"
              >
                <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 text-3xl">
                  Photo editing
                </h2>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-[#ADA8C3]">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!{" "}
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-[2rem] leading-normal mb-4">
                  Video generation
                </h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[2rem] text-[#ADA8C3]">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      className={`flex items-center justify-center
                    ${
                      index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-[conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)] md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                    }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-[#15131D] rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} height={24} width={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-[#0E0C15] rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
