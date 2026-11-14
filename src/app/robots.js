import { headers } from "next/headers";

export default async function robots() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
    `${requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https")}://${host}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account", "/forgot-password", "/tasks", "/status"],
    },
    sitemap: `${siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
