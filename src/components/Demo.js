// components/Demo.js
import Image from 'next/image';
import imageAsset from '/public/demo-image.png'

export default function Demo() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-12 bg-[#1e2019]">
      <div className="w-full max-w-4xl">
        <Image 
          src={imageAsset}
          width={1920} 
          height={1080} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
