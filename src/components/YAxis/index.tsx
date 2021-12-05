import type { YAxisProps } from "./types";

export const YAxis = ({ labels }: YAxisProps) => {
  return (
    <ol
      style={{
        gridRowStart: 2,
        gridRowEnd: 3,
        gridColumnStart: 2,
        gridColumnEnd: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingRight: ".5rem",
      }}
    >
      {labels.map((label) => {
        return (
          <li key={label}>
            <h4
              style={{
                textAlign: "right",
                fontSize: ".9rem",
                opacity: 0.8,
                lineHeight: "initial",
              }}
            >
              {label.toLocaleString()}
            </h4>
          </li>
        );
      })}
    </ol>
  );
};
