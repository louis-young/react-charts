import type { TooltipProps } from "./types";

export const Tooltip = ({ text }: TooltipProps) => {
  return (
    <p
      style={{
        color: "white",
        fontWeight: 500,
        padding: ".5rem 1rem",
        backgroundColor: "rgba(71, 71, 71, 0.75)",
        borderRadius: ".125rem",
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      {text}
    </p>
  );
};
