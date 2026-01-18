import Image from "next/image";

const organizations = [
  { name: "Spotify", logo: "/logos/spotify.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Adobe", logo: "/logos/adobe.svg" },
  { name: "SRMCEM", logo: "/logos/srmcem.svg" },
  { name: "BBDU", logo: "/logos/bbdu.svg" },
];

export default function Organisations() {
  return (
    <section className="bg-black py-14 overflow-hidden">
      
      {/* Section Title */}
      <p className="text-center text-gray-400 mb-10 tracking-wide">
        Trusted by leading organizations
      </p>


      {/*Marquee Wrapper  */}
      <div className="relative w-full overflow-hidden">
        <div className=" flex w-max items center gap-24" style ={{
          animation : "marquee 25s linear infinite",
        }}>

      {/* Logos */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-16 opacity-80">
        {organizations.map((org) => (
          <Image
            key={org.name}
            src={org.logo}
            alt={org.name}
            width={120}
            height={40}
            className="invert grayscale transition duration-300"
            //  hover:grayscale-0
          />
        ))}
        </div>
        </div>
      </div>
    </section>
  );
}
