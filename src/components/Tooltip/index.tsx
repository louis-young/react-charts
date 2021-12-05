import type { TooltipProps } from "./types";

export const Tooltip = ({ text }: TooltipProps) => {
  return (
    <p
      style={{
        color: "white",
        fontWeight: 500,
        padding: ".75rem 1.5rem",
        backgroundColor: "rgba(71, 71, 71, 0.75)",
        borderRadius: ".125rem",
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      {text}
    </p>
  );
};
