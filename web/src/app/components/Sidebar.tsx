import { HomeIcon, Search, Library } from "lucide-react";
export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-4 mt-10">
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100 "
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100 "
        >
          <Library />
          Library
        </a>
      </nav>
      <nav className="mt-10 pt-6 border-t border-zinc-1040 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Mix do dia 2
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Mochingbird 1 hour
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Stuff
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Phonk
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Strangers
        </a>
      </nav>
    </aside>
  );
}
