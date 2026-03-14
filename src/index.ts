// create raw http server
import http from "node:http";
import { env } from "./env.js";
import { createServerApplication } from "./app/index.js";

async function main() {
  try {
    const app = createServerApplication();
    const server = http.createServer(app);
    const PORT: number = env.PORT ? +env.PORT : 8080;

    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
