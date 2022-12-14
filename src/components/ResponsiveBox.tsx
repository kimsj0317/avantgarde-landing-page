import { ComponentProps, ForwardedRef, forwardRef } from "react";

function DesktopResponsiveBox({
    width,
    height,
    children,
    style,
    rootProps,
    ...otherProps
}: ComponentProps<"div"> & {
    width: number;
    height: number;
    rootProps?: ComponentProps<"div">;
},
    ref: ForwardedRef<HTMLDivElement>) {
    return (
        <div
            {...rootProps}
            style={{
                ...rootProps?.style,
                paddingTop: `${(height / width) * 100}%`,
                position: "relative",
            }}
        >
            <div
                ref={ref}
                {...otherProps}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    ...style,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export const ResponsiveBox = forwardRef(DesktopResponsiveBox);
