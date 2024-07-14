import React from "react";
import { css } from "../../../styled-system/css";

export const Container = ({ children }: { children: React.ReactNode }) => (
    <div className={css({
        maxWidth: "full",
        marginInline: "12",
        padding: "12"
    })}>{children}</div>
);
