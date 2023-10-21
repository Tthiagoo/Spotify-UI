import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { MusicAlbum } from "./MusicAlbum";

export function Main() {
  return (
    <main className="flex-1 p-6 border border-red-500">
      <div className="flex items-center gap-6 border border-blue-500">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <MusicAlbum />
        <MusicAlbum />
        <MusicAlbum />
        <MusicAlbum />
        <MusicAlbum />
        <MusicAlbum />
      </div>
    </main>
  );
}
