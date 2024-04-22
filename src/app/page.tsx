import BoardIcon from "@/components/BoardIcon/BoardIcon";
import Panel from "@/components/Panel/Panel";

export default function Home() {
  return (
    <>
      <label
        htmlFor="my-drawer"
        className="absolute top-[45%] left-0 bg-[#EFEFEF] h-[10%] w-20 z-100"
      />
      <main className="grid grid-cols-5 h-screen p-10 ml-16 bg-white gap-14">
        <section className="h-full grid grid-rows-7 gap-10 col-span-4">
          <div>
            <Panel />
          </div>
          <div className="row-span-6 flex flex-col gap-10">
            <div className="flex gap-10">
              <BoardIcon />
              <Panel />
              <Panel />
              <Panel />
            </div>
            <div className="flex gap-10 grow">
              <Panel />
              <Panel />
              <Panel />
              <Panel />
            </div>
            <div className="flex gap-10 grow">
              <Panel />
              <Panel />
              <Panel />
              <Panel />
            </div>
          </div>
        </section>
        <aside className="grid grid-cols-2 grid-rows-7 gap-10">
          <div className="col-span-2 flex gap-10">
            <Panel />
            <Panel />
          </div>
          <div className="col-span-2">
            <Panel />
          </div>
          <div className="col-span-2 row-span-3 flex flex-col gap-16 h-full pt-8">
            <div className="flex gap-10 grow">
              <Panel />
              <Panel />
            </div>
            <div className="flex gap-10 grow">
              <Panel />
              <Panel />
            </div>
            <div className="flex gap-10 grow">
              <Panel />
              <Panel />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-10">
            <Panel />
            <Panel />
          </div>
          <div className="flex  col-span-2 justify-end items-end">
            <div className="flex gap-10 h-1/2 w-full">
              <Panel />
              <Panel />
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}
