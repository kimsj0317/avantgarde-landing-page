import type { ReactNode } from "react";

export function DesktopNavbarComingSoonLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      onClick={(event) => {
        event.preventDefault();
        alert("coming soon"); // ag studio 클릭시 coming soon 메시지 띄우기
      }}>
      {children}
    </a>
  );
}
