export interface TeamMember {
  name: string;
  email: string;
  isEmail: boolean;
  role: string;
  grade: string;
  major: string;
  imageSrc: string;
}

export interface TeamDepartment {
  title: string;
  members: TeamMember[];
}

export const teamData: TeamDepartment[] = [
  {
    title: "Executive",
    members: [
      {
        name: "Daniel Tsonga",
        email: "daniel.tsonga@dmtacres.com",
        isEmail: true,
        role: "Managing Director",
        grade: "BSc in Land Management",
        major: "(Land Surveying)",
        imageSrc: "/team/DanielTsonga.jpg",
      },
      {
        name: "Mwayi Tsonga",
        email: "mwayi.tsonga@dmtacres.com",
        isEmail: true,
        role: "Deputy Director",
        grade: "Masters of Business Administration",
        major: "(Strategic Marketing)",
        imageSrc: "/team/MwayiTsonga.jpg",
      },
    ],
  },
  {
    title: "Finance and Administration",
    members: [
      { name: "Sylvester Maluku", email: "sylvester.maluku@dmtacres.com", isEmail: true, role: "Administrator", grade: "Bachelors of Laws (Hons) (pending)", major: "", imageSrc: "/team/sylvester-maluku.jpg" },
      { name: "Tears Bisani", email: "tears.bisani@dmtacres.com", isEmail: false, role: "Human Resource Manager", grade: "Diploma in Human Resource Management", major: "", imageSrc: "/team/tears-bisani.jpg" },
      { name: "Angela Chinyama", email: "angela.chinyama@dmtacres.com", isEmail: true, role: "Accountant", grade: "Bcom in Financial Sciences", major: "(Financial Management, Accounting, Internal Auditing)", imageSrc: "/team/angela-chinyama.jpg" },
      { name: "Edward Mbesa", email: "edward-mbesa@dmtacres.com", isEmail: true, role: "Operations Manager", grade: "Bachelor of Social Sciences (Development Studies)", major: "Masters of Arts in Political Science (pending)", imageSrc: "/team/edward-mbesa.jpg" },
      { name: "Peace Msoza", email: "peace.msoza@dmtacres.com", isEmail: false, role: "Transport and Logistics Manager", grade: "Bachelors of Science in Land Economy", major: "(Property Management and Marketing)", imageSrc: "/team/peace-msoza.jpg" },
    ],
  },
  {
    title: "Production and Processing Department",
    members: [
      { name: "Francisco Jonas", email: "francisco.jonas@dmtacres.com", isEmail: false, role: "Quality Assurance Manager", grade: "Bachelors of Science in Nutrition and Food Science", major: "(Human Nutrition)", imageSrc: "/team/francisco-jonas.jpg" },
      { name: "Rabson Mvula", email: "rabson-mvula@dmtacres.com", isEmail: true, role: "Productions Manager", grade: "Diploma in Community Development", major: "Certificate in Legal Studies", imageSrc: "/team/rabson-mvula.jpg" },
    ],
  },
  {
    title: "Environmental Department",
    members: [
      { name: "Omega Tsonga", email: "omega.tsonga@dmtacres.com", isEmail: true, role: "Safety and Environmental Manager", grade: "Bachelors of Science in Environmental Sciences", major: "Masters in Tourism and Hotel Management (pending)", imageSrc: "/team/omega-tsonga.jpg" },
    ],
  },
  {
    title: "Marketing Department",
    members: [
      { name: "Carol Chingwalu", email: "carol.chingwalu@dmtacres.com", isEmail: false, role: "Marketing Manager", grade: "Bachelors of Business Administration", major: "(Marketing)", imageSrc: "/team/carol-chingwalu.jpg" },
      { name: "Pauline Makhalira", email: "pauline.makhalira@dmtacres.com", isEmail: true, role: "Trade Execution Manager", grade: "Bachelors of Science in International Economics and Trade", major: "Bachelors of Science in Computing and Information Systems", imageSrc: "/team/pauline-makhalira.jpg" },
    ],
  },
  {
    title: "Research and Consultancy Unit",
    members: [
      { name: "Dr. Wisdom Malata", email: "wisdom.malata@dmtacres.com", isEmail: false, role: "Research Consultant", grade: "PhD. Social Anthropology", major: "MA. Cultural Studies", imageSrc: "/team/dr-wisdom-malata.jpg" },
      { name: "Joseph Kaphesi", email: "joseph.kaphesi@dmtacres.com", isEmail: false, role: "Scientific Analyst", grade: "Bachelor of Science in Natural Resources Management", major: "Bachelor of Arts in Organizational Leadership and Public Relations Masters in Communication Studies (pending)", imageSrc: "/team/joseph-kapesi.jpg" },
    ],
  },
  {
    title: "Extension and Industrial Control System Department",
    members: [
      { name: "Freddie Oliver Kokha", email: "freddie.kokha@dmtacres.com", isEmail: true, role: "Agriculture Manager - Crops", grade: "Diploma in Agriculture and Natural Resources Management", major: "Bachelors of Development Economics (pending)", imageSrc: "/team/fred-oliver-kokha.jpg" },
      { name: "Martha Kamchepera", email: "martha.kamchepera@dmtacres.com", isEmail: false, role: "Veterinary Manager", grade: "Diploma in Animal Health and Production", major: "", imageSrc: "/team/martha-kamchepera.jpg" },
      { name: "Chikondi Lifa", email: "chikondi.lifa@dmtacres.com", isEmail: true, role: "Agro-Spatial Analyst", grade: "BSc in Land Management", major: "(Land Surveying)", imageSrc: "/team/chikondi-lifa.jpg" },
      { name: "Louis Makhiringa", email: "louis.makhiringa@dmtacres.com", isEmail: false, role: "Irrigation Engineer", grade: "Bachelor of Science in Irrigation Engineering", major: "", imageSrc: "/team/louis-makhiringa.jpg" },
      { name: "Chipiliro Chingwembere", email: "chipiliro.chigwembere@dmtacres.com", isEmail: false, role: "Farm Manager", grade: "Malawi School Certficate of Education", major: "", imageSrc: "/team/chipiliro-chigwembere.jpg" },
    ],
  },
];
