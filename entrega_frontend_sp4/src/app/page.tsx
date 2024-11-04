import Image from "next/image";
import img1 from "../app/img/img1.png";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline text-center m-8">JLR Soluções</h1>
      </div>
      <div>
        <Image src={img1} alt="img1" className="w-80" />
      </div>
    </div>
  );
}
