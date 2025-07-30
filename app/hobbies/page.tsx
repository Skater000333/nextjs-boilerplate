"use client";
import Image from "next/image";

const photos = [
  // Put sample images or placeholders; you can update these later
  { src: "/skate1.jpg", alt: "Parth skating at nationals" },
  { src: "/coach.jpg", alt: "Coaching session" },
  { src: "/volunteering.jpg", alt: "Community teaching" },
];

export default function WhoIAmPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-extrabold text-green-700 mb-6 text-center">Who I Am</h1>
      <div className="bg-white rounded-xl shadow-lg p-5 max-w-2xl mx-auto">
        <h2 className="font-bold text-xl mb-3 text-green-700">🏅 National Skater & Team Captain</h2>
        <p className="mb-3 text-gray-700">
          I’ve been passionate about roller hockey and skating since school, winning 20+ National medals and leading my state & district teams to podium finishes. Sports taught me resilience, leadership, and how to thrive under pressure!
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Gold x2</span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Silver x4</span>
          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">Bronze x2</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">20+ Nationals</span>
        </div>
        <h3 className="font-semibold text-lg mt-5 mb-2">Other Passions</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Mentoring & teaching underprivileged kids (60+ enrolled in school!)</li>
          <li>Fest ops lead, event logistics & vendor management</li>
          <li>Community building, public speaking</li>
        </ul>
        {/* Photo Grid */}
        <h3 className="font-semibold text-lg mt-6 mb-2">Gallery</h3>
        <div className="grid grid-cols-2 gap-3">
          {photos.map((p, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow">
              <Image
                src={p.src}
                alt={p.alt}
                width={300}
                height={200}
                className="object-cover w-full h-32"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
