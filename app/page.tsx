import Image from "next/image";
import home_bird from '@/public/img/home_bird.png'

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs">Proteja todos os pássaros</p>
        <h1 className="pb-5">
          As aves <span className="special-word">Mais Rara</span><br /> do Mundo
        </h1>

        <p>Sejam Todos bem-vindos ao site de Notícias da Systan, fique ligado o que acontence em Angola e no Mundo.</p>
      </div>

      <div className="hidden md:block basis-1/3">
        <Image
          src={home_bird}
          alt="Home bird"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
