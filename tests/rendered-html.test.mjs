import assert from "node:assert/strict";
import test from "node:test";

test("renders production site metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<title>BestaurantsIndy \| Indianapolis Restaurants Worth Leaving the House For<\/title>/i);
  assert.match(html, /<meta[^>]+name=["']description["'][^>]+Indianapolis restaurant/i);
});

test("each indexable page declares its own canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  for (const path of ["/", "/reviews/yats-half-and-half", "/reviews/i-got-goosed-and-liked-it", "/photo-buffet", "/guides/date-night"]) {
    const response = await worker.fetch(
      new Request(`https://bestaurantsindy.com${path}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
    assert.equal(canonical, `https://bestaurantsindy.com${path}`, path);
  }
});
