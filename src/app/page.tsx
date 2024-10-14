import CreateUser from "@/components/Create-User";
import ListUsers from "@/components/List-Users";
import ThemeToggle from "@/components/Theme-Toggle";
export default function Home() {
  return (
    <main className="gap-16 p-16 grid grid-rows-1  grid-cols-3 items-start justify-items-center[family-name:var(--font-geist-sans)] ">
      <div className="row-span-1">
        {" "}
        <CreateUser />
      </div>
      <div className="row-span-1">
        {" "}
        <ListUsers />
      </div>{" "}
      <div className="row-span-1">
        {" "}
        <ThemeToggle />
      </div>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer> */}
    </main>
  );
}
