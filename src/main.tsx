import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter } from "@/router";
import { RouterProvider } from "react-router";
import "./styles/global.scss";

const router = createRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
