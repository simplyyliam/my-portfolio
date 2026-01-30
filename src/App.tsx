import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "next-themes";

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}
