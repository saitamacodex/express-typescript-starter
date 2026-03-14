// create express server
import express from "express";
import type { Application } from "express";

// Routes

export function createServerApplication(): Application {
  const app = express();

  app.get("/", function (req, res) {
    return res.json({ message: "Hello! from Express Server." });
  });

  app.get("/logoff", function (req, res) {
    return res.json({ message: "Chalo See ya later!" });
  });

  return app;
}
