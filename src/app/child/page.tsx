"use client";
import { css } from "../../../styled-system/css";
import { useState } from "react";
import { Container } from "@/app/_layout/Container";

export default function ChildPage() {
    const [isHovered, setIsHovered] = useState(false)

    function onMouseLeave() {
        setIsHovered(false)
    }

    function onMouseEnter() {
        setIsHovered(true)
    }

    return <Container>
        <p className={css({
            fontSize: 'l',
            padding: "8",
            border: `1px solid token(colors.green.100)`,
            "&:hover": {
                backgroundColor: "green.500"
            },
        })}>Hello World</p>
        <p className={css({
            borderStyle: "dotted",
            borderWidth: "medium",
            boxShadow: "lg",
            fontSize: "[12px]",
            paddingBlock: "8",
            paddingInline: "4",
            width: "full"
        })}>test</p>
        <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={css({
            padding: "8",
            border: "1px solid token(colors.green.100)",
            backgroundColor: isHovered ? "green.500" : "green.100",
        })}>BUTTON
        </button>

        <div>
            <img className={css({
                display: "inline",
                width: "1/3",
                border: "2px solid token(colors.green.100)",
                verticalAlign: "top",
                aspectRatio: "rec-3:1"
            })}
                 src="https://via.placeholder.com/450x150"
                 alt={""}
            /></div>
    </Container>
}
