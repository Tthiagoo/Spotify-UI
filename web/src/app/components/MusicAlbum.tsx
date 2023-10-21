import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function MusicAlbum() {
  return (
    <a
      href="#"
      className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
    >
      <Image src="/album.jpg" alt="image playlist" width={104} height={104} />
      <strong>Blurry Face</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
