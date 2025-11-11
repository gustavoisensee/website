import { useEffect } from "react";

export const useSideMenu = () => {
  useEffect(() => {
    const btn: HTMLButtonElement = document.querySelector(
      ".mobile-menu-button"
    )!;
    const sidebar: HTMLDivElement = document.querySelector(".sidebar")!;

    btn.addEventListener("click", () => {
      sidebar.classList.remove("translate-x-56");
    });

    document.addEventListener("click", (event: MouseEvent) => {
      if (!btn.contains(event.target as Node)) {
        sidebar.classList.add("translate-x-56");
        return;
      }
    });
  }, []);

  return null;
};
