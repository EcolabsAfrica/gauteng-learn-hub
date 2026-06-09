import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Info } from "lucide-react";
import hero from "../assets/gallery/photo-02-fire-safety-training.jpeg.asset.json";

export const Route = createFileRoute("/centres")({
  head: () => ({ meta: [
    { title: "Our Centres | Gauteng CET College" },
    { name: "description", content: "47 Community Learning Centres and 267 Satellite Centres across Gauteng's 5 municipal districts." },
    { property: "og:title", content: "Our Centres Across Gauteng" },
    { property: "og:description", content: "Find a CLC near you across Johannesburg, Tshwane, Ekurhuleni, Sedibeng and West Rand." },
    { property: "og:image", content: hero.url },
  ] }),
  component: CentresPage,
});

type Row = [string, string, string];

const clusters: { key: string; name: string; lecturers: number; rows: Row[] }[] = [
  {
    key: "jhb",
    name: "Johannesburg",
    lecturers: 474,
    rows: [
      ["21 Battalion", "R558 Lenasia", "084 969 6980"],
      ["Alexandra", "13th Avenue & London Rd", "073 324 5197"],
      ["City Deep", "100 Heidelberg Road", "072 636 0062"],
      ["Chiawelo", "192 Mabalane St, Senaone, Johannesburg, 1818", "079 329 9492"],
      ["Denver", "48 Hout Street, Jeppestown, Johannesburg", "076 527 9010"],
      ["Diepkloof", "722 Njambayi St Zone 1", "082 586 9807"],
      ["ED Mafole", "620B Mamasilanoka St, Meadowlands", "083 338 7394"],
      ["Fourways", "Plot 110 Witkoppen School, William Nicol Drive", "082 956 1013"],
      ["Herbert Mdingi", "6603 Madlala St, Orlando East, Soweto", "073 862 0047"],
      ["Ivory Park", "4324 Recreation St, Ivory Park Ext 6, Midrand 1685", "074 532 6940"],
      ["Josiah Khumalo", "1715 Mshengu St, Emndeni, Soweto", "076 848 9411"],
      ["Morakapula", "1873 Zone 9, Meadowlands", "082 351 0099"],
      ["Peter Lengene", "1097 Mbambiya Dr", "060 740 2455"],
      ["PQ Vundla", "1822B Molapo, Soweto", "073 076 3293"],
      ["Setlakalane Molepo", "730 Madimabe St, Tladi, Soweto", "011 930 6976"],
      ["Sydney Maseko", "3134 Diakone St, Soweto", "083 569 2238"],
    ],
  },
  {
    key: "tsh",
    name: "Tshwane",
    lecturers: 492,
    rows: [
      ["Bethsaida", "317 Block L, Soshangve", "060 719 9060"],
      ["DWT Nthathe", "Plot 1080 Winterveldt, 0198", "071 870 3605"],
      ["Gaerobe", "Khutso Primary School, 429 Block K, Mogalakwena and Khutso St, Soshanguve", "081 002 6901"],
      ["Gaegolelwe", "1-A Motsepe St, Atteridgeville, 0008", "079 852 4017 / 079 312 9219"],
      ["Hammanskraal", "Temba Teachers' Centre, 3161 Kanana St", "082 883 5738"],
      ["Holy Trinity", "1 Khoza St, Atteridgeville", "073 635 4691"],
      ["Mamelodi", "19693 Montja St, Section N, Mamelodi West", "076 190 8647"],
      ["Reneilwe", "School 10945, Lefakong St, Mamelodi East", "072 431 5826"],
      ["Moephathutse", "287 Pelo St, Zone 1, Ga-Rankuwa", "082 744 0929"],
      ["Pretoria Central", "389 Van der Walt", "083 414 2830"],
      ["Taamane", "1172 Jiyane St, Refilwe, Cullinan 1000", "074 935 7943"],
      ["Victory", "1460 Block G, Shoshanguve", "072 209 1329"],
    ],
  },
  {
    key: "ekur",
    name: "Ekurhuleni",
    lecturers: 439,
    rows: [
      ["Aaron Moeti", "2 Mosoeu St, Mopedi Section, Katlehong, 1432", "073 661 3332"],
      ["Thutomfundo", "109 Kubeka St, Vosloorus", "073 309 1043"],
      ["Daveyton", "Corner Mocke & Eiselen St, Daveyton, 1520", "083 447 1255"],
      ["Duduza", "Mom Secondary School, 4899 Seboku St, Duduza, 1496", "073 723 0453"],
      ["Kwa-Thema", "Lefa Ifa Sec School, 1488 Sam Ngema Dr, Kwa-Thema", "083 645 0289"],
      ["Kwazini", "1 Morogoro St, Esiqongweni Section, Tembisa", "011 933 2277"],
      ["ST Anthonys", "Ekukhanyeni Combine School, 1296 Ingwamza St, Ramphosa Ext 5, Boksburg", "065 203 4880"],
      ["Tembisa", "180 Andrew Mapheto Dr, 1 Ibazela Section, Tembisa", "083 279 6289"],
      ["Tsakane", "21249 Tsakane Rd, Ext 11, Tsakane", "087 202 1862"],
      ["Thokoza", "2498 Moepshe St, Thokoza", "078 265 4867"],
      ["Vunanimfundo", "1353 Phofedi, Etwatwa West", "083 580 0254"],
      ["Wattville", "1799 Lesabe St, Corner & Naheng St, Wattville", "079 503 8888"],
    ],
  },
  {
    key: "sed",
    name: "Sedibeng",
    lecturers: 79,
    rows: [
      ["Sebokeng", "14237 Mofolo St, Zone 11, Sebokeng, 1983", "078 564 3866"],
      ["Sharpeville", "8900 Zwane St, Sharpeville", "081 762 1586"],
      ["Tswinyane", "118 Ndlovu St, Ratanda, Heidelberg", "060 752 3116"],
    ],
  },
  {
    key: "wr",
    name: "West Rand",
    lecturers: 196,
    rows: [
      ["Bekkersdal", "3506 Mokate St, Mohlakeng, Randfontein", "082 878 8141"],
      ["Kagiso", "Masupatsela High School, 9080 Sebenzisa St, Kagiso 2", "082 945 2288 / 073 155 4391"],
      ["Khutsong", "3967 Nxumalo Rd, Khutsong", "082 950 9866"],
      ["Wedela", "05 Kraalkop St, Kokosi", "078 615 5390"],
    ],
  },
];

function CentresPage() {
  const [active, setActive] = useState(clusters[0].key);
  const current = clusters.find((c) => c.key === active)!;
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[50vh] min-h-[360px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.url})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(232, 80, 10, 0.5)" }} />
        <div className="relative text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[48px]">Our Centres Across Gauteng</h1>
          <p className="mt-4 text-white text-base md:text-lg">
            47 Community Learning Centres &nbsp;|&nbsp; 267 Satellite Centres &nbsp;|&nbsp; 5 Municipal Districts
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <p className="text-foreground/80 text-lg leading-relaxed">
            Gauteng CET College operates across all five municipal districts of Gauteng. Click on your district to find the Community Learning Centres (CLCs) and Satellite Centres closest to you.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-wrap gap-2 border-b border-gray-300">
            {clusters.map((c) => {
              const isActive = c.key === active;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`px-5 py-3 font-semibold rounded-t-lg transition ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-200 text-navy hover:bg-gray-300"
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-b-xl shadow-sm p-4 md:p-6">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-navy font-bold text-xl md:text-2xl">{current.name} Cluster</h2>
              <span className="text-sm text-foreground/60">{current.lecturers} lecturers · {current.rows.length} CLCs</span>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-alt-bg text-navy">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold">Centre Name</th>
                    <th className="text-left px-4 py-3 font-bold">Physical Address</th>
                    <th className="text-left px-4 py-3 font-bold">Contact Number</th>
                  </tr>
                </thead>
                <tbody>
                  {current.rows.map(([name, addr, phone]) => (
                    <tr key={name} className="border-t border-gray-200 hover:bg-alt-bg/50">
                      <td className="px-4 py-3 font-semibold text-navy">{name}</td>
                      <td className="px-4 py-3 text-foreground/80">{addr}</td>
                      <td className="px-4 py-3 text-foreground/80 whitespace-nowrap">
                        <a href={`tel:${phone.split(" / ")[0].replace(/\s/g, "")}`} className="hover:text-primary">{phone}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SATELLITE NOTE */}
          <div className="mt-8 bg-gray-100 border-l-4 border-secondary rounded-lg p-5 flex gap-3 items-start">
            <Info className="text-secondary shrink-0 mt-0.5" size={22} />
            <p className="text-foreground/80 leading-relaxed">
              In addition to the 47 Community Learning Centres above, Gauteng CET College operates <strong>267 Satellite Centres</strong> across the province. Contact your nearest CLC or the head office for your closest satellite location.
            </p>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-navy font-bold text-2xl md:text-3xl text-center">Head Office Location</h2>
          <p className="mt-3 text-center text-foreground/70">
            Block D, 2nd Floor, Crownwood Office Park, 100 Northern Parkway, Ormonde, 2091
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Gauteng CET Head Office Map"
              src="https://www.google.com/maps?q=Crownwood+Office+Park,+100+Northern+Parkway,+Ormonde,+Johannesburg&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}