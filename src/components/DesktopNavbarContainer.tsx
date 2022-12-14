import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
} from "react";
import styles from "./DesktopNavbarContainer.module.scss";

function DesktopNavbarContainerImpl(
  { children, className, ...otherProps }: ComponentProps<"nav">,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastInteraction = new Date().getTime();

    function mouseMoveHandler() {
      setShow(true);
      lastInteraction = new Date().getTime();
    }

    window.addEventListener("scroll", mouseMoveHandler);
    window.addEventListener("mousemove", mouseMoveHandler);

    const timer = setInterval(() => {
      if (new Date().getTime() - lastInteraction >= 2700) {
        setShow(false);
      }
    }, 1000);

    return () => {
      window.removeEventListener("scroll", mouseMoveHandler); // 스크롤 시 화면에 띄움
      window.removeEventListener("mousemove", mouseMoveHandler); // 마우스 움직일 시 화면에 띄움

      clearInterval(timer);
    };
  }, []);

  return (
    <nav
      ref={ref}
      {...otherProps}
      className={[styles.desktopNavbarContainer, className].join(" ")}
      aria-hidden={!show}
    >
      {children}
    </nav>
  );
}

export const DesktopNavbarContainer = forwardRef(DesktopNavbarContainerImpl);
