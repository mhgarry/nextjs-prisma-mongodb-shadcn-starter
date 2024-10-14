import CreateUser from "@/components/Create-User";
import ListUsers from "@/components/List-Users";

export default function Home() {
  return (
    <main className="p-8 gap-8 grid  grid-cols-2 items-stretch justify-items-center[family-name:var(--font-geist-sans)] ">
      <div className="h-1/2">
        {" "}
        <CreateUser />
      </div>
      <div className="h-1/2">
        {" "}
        <ListUsers />
      </div>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer> */}
    </main>
  );
}
