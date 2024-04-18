import Panel from "./components/Panel/Panel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 ml-16 bg-white">
      <label
        htmlFor="my-drawer"
        className="absolute top-0 left-0 bg-[#EFEFEF] h-full w-12 z-100"
      />
      <section className="grid grid-cols-4 gap-4 w-full h-full flex-grow">
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
      </section>
    </main>
  );
}
