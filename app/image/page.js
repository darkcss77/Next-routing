import Image from "next/image";
import ImageP from "@/public/image.jpg";

export default function ImageCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10 overflow-hidden relative">
      <h3>Heading</h3>
      <div className="image-card">
        <Image
          src={ImageP}
          alt="Picture of the author"
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </div>
  );
}
