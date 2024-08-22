import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center py-5"><p className="text-bold text-3xl uppercase">Representante:</p></div>
      <div className="flex items-center justify-center gap-10">
        <Image
          src="https://placehold.jp/600x400.png"
          alt="Representante 1"
          width={600}
          height={400}
          className="hover:scale-[1.05] hover:transition hover:ease-in-out hover:duration-500 cursor-pointer"
        />
        <div className="bg-zinc-400 w-[2px] h-[200px]"></div>
        <Image
          src="https://placehold.jp/600x400.png"
          alt="Representante 2"
          width={600}
          height={400}
          className="hover:scale-[1.05] hover:transition hover:ease-in-out hover:duration-500 cursor-pointer"
        />
      </div>
    </div>
  )
}
