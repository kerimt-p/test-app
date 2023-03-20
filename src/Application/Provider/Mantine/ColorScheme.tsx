import React from "react";

export const ColorSchemeProvider: React.FC<React.PropsWithChildren> = (props) => {
    const {children} = props;
    return (
        <div>{children}</div>
    )
}