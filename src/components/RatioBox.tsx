import { FunctionComponent, PropsWithChildren, useEffect, useRef } from "react";

export const RatioBox: FunctionComponent<PropsWithChildren<{}>> = ({
   children,
}) => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const box = ref.current;
      if (!box) {
         throw new Error("no box provided");
      }
      box.style.paddingTop = `41%`;
   }, []);

   return (
      <div ref={ref}>
         {children}
      </div>
   );
};
