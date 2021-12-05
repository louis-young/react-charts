import type { BarProps } from "./types";

export const Bar = ({ series, onTooltipChange }: BarProps<HTMLDivElement>) => {
  const { label, value, getBarProps } = series;

  const handleMouseEnter = () => {
    const newTooltip = `${label}: ${value}`;

    onTooltipChange(newTooltip);
  };

  const handleMouseLeave = () => {
    onTooltipChange(undefined);
  };

  return (
    <div
      {...getBarProps({
        onClick: () => {
          // Perform a side effect...
        },
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
