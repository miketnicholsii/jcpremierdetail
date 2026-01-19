import { test, expect } from "@playwright/test";
import { services } from "../src/data/services";
import { serviceAreas } from "../src/data/business";
import { getLocationPath, getServiceLocationPath } from "../src/lib/routes";

const staticPages = [
  "/",
  "/about",
  "/services",
  "/gallery",
  "/estimate",
  "/contact",
  "/booking",
  "/maintenance-plans",
  "/privacy",
  "/terms",
];

const locationPages = serviceAreas.map((area) => getLocationPath(area.slug));
const serviceLocationPages = serviceAreas.flatMap((area) =>
  services.map((service) => getServiceLocationPath(service.slug, area.slug))
);

const seedPages = [...staticPages, ...locationPages, ...serviceLocationPages];

const normalizeInternalPath = (href: string, base: string) => {
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
    return null;
  }

  if (href.startsWith("#")) {
    return null;
  }

  const resolved = new URL(href, base);
  if (resolved.origin !== new URL(base).origin) {
    return null;
  }

  return `${resolved.pathname}${resolved.search}`;
};

test("internal links resolve without 404s", async ({ page }) => {
  const collectedPaths = new Set<string>(seedPages);

  for (const path of seedPages) {
    await page.goto(path, { waitUntil: "domcontentloaded" });
    const base = page.url();
    const hrefs = await page.locator("a[href]").evaluateAll((links) =>
      links.map((link) => link.getAttribute("href")).filter(Boolean)
    );

    for (const href of hrefs) {
      const normalized = normalizeInternalPath(href, base);
      if (normalized) {
        collectedPaths.add(normalized);
      }
    }
  }

  for (const path of collectedPaths) {
    await page.goto(path, { waitUntil: "domcontentloaded" });
    await expect(page.locator("text=Oops! Page not found")).toHaveCount(0);
    await expect(page.locator("text=Page Not Found")).toHaveCount(0);
  }
});
