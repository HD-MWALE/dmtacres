export interface Company {
  name: string;
  motto: string;
  logo: string;
  logoWB: string;
  contacts: {
    address: string;
    address2?: string;
    phone: string;
    email: string;
    website: string;
  }[];
}

export const companyData: Company[] = [
  {
    name: "DMT Acres Malawi",
    motto: "Sustainable Farming for a Thriving Future",
    logo: "/logo/dmt_acres_logo.png",
    logoWB: "/logo/dmt_acres_logo_white_background.png",
    contacts: [
      {
        address: "Ntcheu, Malawi",
        address2: "Kasungu, Malawi",
        phone: "+265 999 498 162",
        email: "dmtacresmw@gmail.com",
        website: "https://www.dmtacres.com",
      }
    ]
  }
];
