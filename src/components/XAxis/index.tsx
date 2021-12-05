import type { XAxisProps } from "./types";

export const XAxis = ({ labels, seriesLength }: XAxisProps) => {
  return (
    <ol
      style={{
        gridRowStart: 3,
        gridRowEnd: 4,
        gridColumnStart: 3,
        gridColumnEnd: 4,
        display: "grid",
        gridTemplateColumns: `repeat(${seriesLength}, 1fr)`,
        columnGap: "1.5rem",
        alignItems: "center",
      }}
    >
      {labels.map((label) => {
        return (
          <li key={label}>
            <h4
              style={{
                textAlign: "center",
                fontSize: ".9rem",
                opacity: 0.8,
              }}
            >
              {label}
            </h4>
          </li>
        );
      })}
    </ol>
  );
};
