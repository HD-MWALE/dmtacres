import { teamData } from "@/data/team";
import { companyData } from "@/data/company";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const member = getMemberByName("Omega Tsonga");

  if (!member) {
    return {
      title: "Member Not Found",
      description: "No such team member exists.",
    };
  }
  const metadataBase = new URL('https://dmtacres.com');
  const title = `${member.name} — ${member.role}`;
  const description = `${member.name} is ${member.role} in the ${member.department} at DMT Acres.`;

  return {
    metadataBase,
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: member.imageSrc,
          width: 400,
          height: 400,
          alt: member.name,
        },
      ],
      type: "profile",
    },
  };
}

const getMemberByName = (name: string) => {
  for (const dept of teamData) {
    const member = dept.members.find(
      (m) => m.name === name
    );
    if (member) {
      return { ...member, department: dept.title };
    }
  }
  return null;
};

const contact = companyData?.[0]?.contacts?.[0] || {};

export default function OmegaTsongaProfile() {
  const member = getMemberByName("Omega Tsonga");

  if (!member) return notFound();

  return (

    <section className="relative flex justify-center py-4 px-6 bg-gray-100 overflow-hidden">

      <Card className="relative z-10 w-full max-w-sm rounded-xl border border-gray-300 shadow-lg bg-white overflow-hidden">
        {/* Logo as Watermark */}
        <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none">
          {companyData?.[0]?.logo && (
            <div className="relative h-60 w-60">
              <Image
                src={companyData?.[0]?.logo}
                alt={companyData?.[0]?.name + " Logo"}
                layout="fill"
                objectFit="contain"
                className="opacity-80" // Lower opacity for watermark effect
              />
            </div>
          )}
        </div>

        {/* Top Header Strip */}
        <div className="bg-green-700 text-white text-center py-2 text-sm font-semibold tracking-wide whitespace-nowrap overflow-hidden relative flex items-center justify-center">
          {/* Logo (with watermark effect) */}
          {companyData?.[0]?.logoWB && (
            <div className=" absolute left-4 h-16 w-16">
              <Image
                src={companyData?.[0]?.logoWB}
                alt={companyData?.[0]?.name + " Logo"}
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          {companyData?.[0]?.name}
        </div>

        {/* Profile Image */}
        <div className="flex justify-center pt-6">
          <div className="relative h-36 w-36 rounded-full overflow-hidden border-0 border-green-600 shadow-sm">
            <Image
              src={member.imageSrc}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Member Details */}
        <CardContent className="px-6 py-4 space-y-2 text-center">
          <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
          <p className="text-green-700 font-medium text-sm">{member.role}</p>
          <p className="text-gray-500 text-sm italic">{member.department}</p>

          {member.grade && (
            <p className="text-sm text-gray-700">Qualification: {member.grade}</p>
          )}
          {member.major && member.major.trim() !== "" && (
            <p className="text-sm text-gray-600 italic">{member.major}</p>
          )}
          {member.isEmail && member.email && (
            <p className="text-sm text-blue-600">
              <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
            </p>
          )}
        </CardContent>

        {/* Company Footer */}
        <div className="bg-gray-50 px-6 py-4 text-xs text-gray-600">
          <p><strong>Address:</strong> {contact.address} and {contact.address2}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contact.email}`} className="text-blue-500 hover:underline">
              {contact.email}
            </a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {contact.website}
            </a>
          </p>
        </div>

        {/* Motto Strip */}
        <div className="bg-green-100 text-center py-1 text-sm text-gray-700 font-medium">
          {companyData?.[0]?.motto}
        </div>
      </Card>
    </section>
  );
}
