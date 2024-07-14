import Link from "next/link";
import { css } from "../../styled-system/css";
import { Container } from "@/app/_layout/Container";

export default function Home() {
    return (
        <Container>
            <ul className={css({
                display: "flex",
                flexDirection: "column",
                gap: "8",
                padding: "4",
                margin: "4",
                listStyle: "none",

            })}>
                <li>
                    <Link href="/child" className={css({
                        color: "blue.700",
                    })}>test</Link>
                </li>
                <li>
                    <Link href="/child" className={css({
                        color: "blue.700",
                    })}>こんにちは</Link>
                </li>
            </ul>
        </Container>
    );
}
