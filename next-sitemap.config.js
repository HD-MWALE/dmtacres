module.exports = {
  siteUrl: 'https://dmtacres.com',
  generateRobotsTxt: true,
  exclude: ['/404'],

  additionalPaths: async () => {
    const members = [
      "Daniel Tsonga",
      "Mwayi Tsonga",
      "Sylvester Maluku",
      "Tears Bisani",
      "Angela Chinyama",
      "Edward Mbesa",
      "Peace Msoza",
      "Francisco Jonas",
      "Rabson Mvula",
      "Omega Tsonga",
      "Carol Chingwalu",
      "Pauline Makhalira",
      "Dr. Wisdom Malata",
      "Joseph Kaphesi",
      "Freddie Oliver Kokha",
      "Martha Kamchepera",
      "Chikondi Lifa",
      "Louis Makhiringa",
      "Chipiliro Chingwembere",
    ];

    return members.map((name) => {
      const slug = name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/\./g, '')
        .replace(/[^a-z0-9\-]/g, '');

      return {
        loc: `/team/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
      };
    });
  },
};
