import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";

export const TeamCard = ({
  name,
  role,
  grade,
  major,
  imageSrc,
}: {
  name: string;
  role: string;
  grade: string;
  major: string;
  imageSrc: string;
}) => (
<Link href={`/team/${name.toLowerCase().replace(/\s+/g, "-")}`}>
  <Card className="bg-white border-green-200 shadow-md transition hover:shadow-lg w-80">
    <CardHeader className="pb-2">
      <CardTitle className="flex justify-center">
        <div className="relative h-48 w-48 rounded-full overflow-hidden border-0 border-green-700">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-center px-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-green-700 font-medium">{role}</p>
      {grade && (
        <p className="text-green-600 text-sm">{grade}</p>
      )}
      {major && (
        <p className="text-green-500 text-sm italic">{major}</p>
      )}
    </CardContent>
  </Card>
</Link>
);
