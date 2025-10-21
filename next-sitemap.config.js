/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/admin/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different routes
    const priorities = {
      "/": 1.0, // Homepage - highest priority
      "/#features": 0.8,
      "/#pricing": 0.8,
      "/#faq": 0.7,
    };

    const changefreqs = {
      "/": "daily",
      default: "weekly",
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || changefreqs.default,
      priority: priorities[path] || 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
