"use client";
import { useColorStore } from "@/stores/colorStore";
import { useTogglesStore } from "@/stores/togglesStore";
import { useWordStore } from "@/stores/wordStore";
import Panel from "@/components/Panel/Panel";
import IconSpeak from "../../public/icons/IconSpeak.png";
import IconGen from "../../public/icons/IconGen.png";
import Image from "next/image";
import TooltipTriangle from "../../public/tooltip-triangle.png";
import Page1 from "@/components/Pages/Page1";
import Page2 from "@/components/Pages/Page2";
import { usePageStore } from "@/stores/pageStore";

export default function Home() {
  const { isWhiteOutline, isBoldOutline } = useTogglesStore();
  const { currentColor } = useColorStore();
  const { words, sentenceOptions } = useWordStore();
  const { page } = usePageStore();

  console.log(sentenceOptions);

  const isShowingSentenceOptions = () =>
    sentenceOptions !== undefined && sentenceOptions.length !== 0;

  return (
    <>
      <label
        htmlFor="my-drawer"
        className="absolute top-[45%] left-0 bg-[#EFEFEF] h-[10%] w-20 z-100"
      />
      <main className="grid grid-cols-5 h-screen p-10 ml-12 bg-white gap-14">
        <section className="h-full grid grid-rows-7 col-span-4 ">
          <div className="flex gap-4 items-center w-full rounded-lg h-40 bg-[#E2E2E2] card-shadow-off px-8 relative mt-10">
            {words.map((word) => {
              return (
                <div
                  key={word + Math.random()}
                  className="text-5xl text-black"
                >{`"${word}"`}</div>
              );
            })}
          </div>

          <div className="row-span-6 flex flex-col justify-start gap-10 h-fit mt-10">
            {isShowingSentenceOptions() && (
              <div className="w-full h-[1236px] bg-[#A2A2A2] rounded-lg flex flex-col gap-2 py-2 z-100">
                <Image
                  src={TooltipTriangle}
                  alt={"triangle tooltip"}
                  className="-mt-4 mx-auto"
                ></Image>
                {sentenceOptions.map((words: string) => {
                  return (
                    <div
                      onClick={() => {
                        useWordStore.setState({
                          words: words.split(" "),
                        });
                      }}
                      key={words + Math.random()}
                      className="text-5xl text-black w-full bg-[#797979] grow items-center flex px-4"
                    >{`"${words}"`}</div>
                  );
                })}
              </div>
            )}
            {!isShowingSentenceOptions() &&
              (page === 1 ? (
                <Page1
                  isBoldOutline={isBoldOutline}
                  isWhiteOutline={isWhiteOutline}
                  currentColor={currentColor}
                />
              ) : (
                <Page2
                  isBoldOutline={isBoldOutline}
                  isWhiteOutline={isWhiteOutline}
                  currentColor={currentColor}
                />
              ))}
          </div>
        </section>
        <aside className="grid grid-cols-2 grid-rows-7 gap-10 ">
          <div className="col-span-2 flex gap-10">
            <Panel
              word={"Generate"}
              input={words}
              className="text-3xl bg-[#C7C7C7] font-semibold text-black flex flex-col items-center justify-around"
            >
              <Image src={IconGen} alt="Generate" className="scale-150 mt-4" />
            </Panel>
            <Panel
              word={"Speak"}
              className="text-3xl bg-[#C7C7C7] font-semibold text-black flex flex-col items-center justify-around"
            >
              <Image src={IconSpeak} alt="Speak" className="scale-150 mt-4" />
            </Panel>
          </div>
          <div className="col-span-2">
            <Panel
              word={"Voice_Settings"}
              className="bg-[#C7C7C7] text-3xl font-semibold text-black/10"
            >
              Voice Settings
            </Panel>
          </div>
          <div className="col-span-2 row-span-3 flex flex-col gap-16 h-[8.9rem] pt-8">
            <div className="flex gap-10 grow">
              <Panel
                word={"Delete"}
                className="text-3xl bg-[#C7C7C7] font-semibold text-black flex items-end justify-center h-36 p-3 "
              >
                Delete
              </Panel>
              <Panel
                word={"Clear"}
                className="text-3xl bg-[#C7C7C7] font-semibold text-black flex items-end justify-center h-36 p-3"
              >
                Clear
              </Panel>
            </div>
          </div>
          <div className="col-span-2 row-span-2 flex justify-end flex-col">
            <div className="flex flex-col gap-6 h-40">
              <Panel
                word={""}
                className="text-3xl bg-[#C7C7C7] font-bold text-black flex items-end justify-center h-36 p-3 text-black/10"
              >
                Random Page 78
              </Panel>
              <Panel
                word={""}
                className="text-3xl bg-[#C7C7C7] font-semibold text-black flex items-end justify-center h-36 p-3 text-black/10"
              >
                {`[-] Page Select`}{" "}
              </Panel>
            </div>
            <div className="flex justify-end items-end h-32 mb-16">
              <div className="flex gap-10 h-1/2 w-full">
                <Panel
                  word={"Previous"}
                  className="text-3xl bg-[#C7C7C7] font-semibold text-black flex items-end justify-center h-36 p-3"
                >
                  Previous
                </Panel>
                <Panel
                  word={"Next"}
                  className="text-3xl bg-[#C7C7C7] font-semibold text-black flex items-end justify-center h-36 p-3"
                >
                  Next
                </Panel>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}
