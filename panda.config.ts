import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    presets: ['@pandacss/preset-base'],
    // Whether to use css reset
    preflight: true,
    // Where to look for your css declarations
    include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],
    // Files to exclude
    exclude: [],

    // slim panda
    // disable utilities
    // eject: true,
    // disable shorthand
    shorthands: false,
    // Enforce strict mode
    strictTokens: true,
    strictPropertyValues: true,
    polyfill: true,
    // Useful for theme customization
    theme: {
        semanticTokens: {
            colors: {
                "surface-brand-weak": {
                    value: "{colors.blue.100}",
                }
            }
        },
        tokens: {
            colors: {
                "green": {
                    100: {
                        value: "#D5F1D2",
                    },
                    200: {
                        value: "#58C55E",
                    },
                    300: {
                        value: "#00A02A",
                    },
                    500: {
                        value: "#00752A",
                    },
                    600: {
                        value: "#006022",
                    },
                    700: {
                        value: "#004A1A",
                    },
                    800: {
                        value: "#003812",
                    },
                    900: {
                        value: "#00280E",
                    },
                },
                "blue": {
                    100: {
                        value: "#D5F1F3",
                    },
                    300: {
                        value: "#58C5CD",
                    },
                    500: {
                        value: "#00A0AB",
                    },
                    700: {
                        value: "#00757D",
                    },
                },
                "neutral": {
                    100: {
                        value: "#F5F5F5",
                    },
                    200: {
                        value: "#E5E5E5",
                    },
                    300: {
                        value: "#CCCCCC",
                    },
                    400: {
                        value: "#AAAAAA",
                    },
                    500: {
                        value: "#888888",
                    },
                    600: {
                        value: "#666666",
                    },
                    700: {
                        value: "#555555",
                    },
                    900: {
                        value: "#222222",
                    }
                },
                "red": {
                    100: {
                        value: "#FFE2E0",
                    },
                    300: {
                        value: "#FF6157",
                    },
                    500: {
                        value: "#E80E00",
                    },
                    700: {
                        value: "#CD0D00",
                    },
                },
                "yellow": {
                    // 100, 300, 500, 700
                    // #FFF0BC, #FFDD64, #FFC700, #E6B300
                    100: {
                        value: "#FFF0BC",
                    },
                    300: {
                        value: "#FFDD64",
                    },
                    500: {
                        value: "#FFC700",
                    },
                    700: {
                        value: "#E6B300",
                    },
                }
            },
            sizes: {
                "full": {
                    value: "100%"
                },
                "8xl": {
                    value: "480px",
                },
                "3xl": {
                    value: "72px",
                },
                "2xl": {
                    value: "48px",
                },
                xl: {
                    value: "40px",
                },
                l: {
                    value: "32px",
                },
                m: {
                    value: "24px",
                },
                s: {
                    value: "16px",
                },
                xs: {
                    value: "12px",
                },
            },
            fonts: {
                "sans": {
                    value: "-apple-system, Noto Sans, Roboto, Inter",
                },
            },
            fontWeights: {
                // 400, 600,
                "regular": {
                    value: "400",
                },
                "strong": {
                    value: "600",
                }
            },
            fontSizes: {
                "4xl": {
                    value: "40px",
                },
                "3xl": {
                    value: "34px",
                },
                "2xl": {
                    value: "28px",
                },
                xl: {
                    value: "22px",
                },
                l: {
                    value: "20px",
                },
                m: {
                    value: "17px",
                },
                s: {
                    value: "16px",
                },
                "2xs": {
                    value: "15px",
                },
                "3xs": {
                    value: "13px",
                },
                "4xs": {
                    value: "12px",
                },
                "5xs": {
                    value: "11px",
                },
            },
            lineHeights: {
                // 160%, 140%, 100%
                l: {
                    value: "160%",
                },
                m: {
                    value: "140%",
                },
                s: {
                    value: "100%",
                },
            },
            // spacing
            spacing: {
                "5xl": {
                    value: "4.5rem",
                    description: "72px"
                },
                "4xl": {
                    value: "4rem",
                    description: "64px"
                },
                "3xl": {
                    value: "3rem",
                    description: "48px"
                },
                "2xl": {
                    value: "2rem",
                    description: "32px"
                },
                xl: {
                    value: "1.5rem",
                    description: "24px"
                },
                l: {
                    value: "1.25rem",
                    description: "20px"
                },
                m: {
                    value: "1rem",
                    description: "16px"
                },
                "12": {
                    value: "0.75rem",
                    description: "12px"
                },
                "8": {
                    value: "0.5rem",
                    description: "8px"
                },
                "4": {
                    value: "0.25rem",
                    description: "4px"
                }
            },
            aspectRatios: {
                'square': { value: '1 / 1' },
                'rec-4:3': { value: '4 / 3' },
                'rec-16:9': { value: '16 / 9' },
                'rec-3:1': { value: '3 / 1' },
            }
        },
        extend: {},
    },
    // The output directory for your css system
    outdir: "styled-system"
});
