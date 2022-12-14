import type { ReactNode } from "react";

export function DesktopNavbarLink({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={`#${id}`}
      onClick={(event) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (!element) {
          return;
        }
        let currentElement: HTMLElement | null = element;
        let top = 0;
        while (currentElement != null) {
          top += currentElement.offsetTop;
          currentElement = currentElement.parentElement;
        }
        window.scroll({
          top: top - 100,
          behavior: "smooth",
        });
      }}
    >
      {children}
    </a>
  );
}
