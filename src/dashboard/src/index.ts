import { Elysia } from "elysia";

const app = new Elysia().get("/", () => ({
  message: "Hello Elysia",
  timestamp: new Date().toISOString(),
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
