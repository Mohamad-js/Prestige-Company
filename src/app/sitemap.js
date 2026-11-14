import { headers } from "next/headers";

export default async function sitemap() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
    `${requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https")}://${host}`;
  const baseUrl = siteUrl.replace(/\/$/, "");

  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/homeEn`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
