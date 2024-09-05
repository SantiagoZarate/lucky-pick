import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  methods: ["GET", "POST", "DELETE", "PUT"],
  origin: "http://localhost:5173",
};
