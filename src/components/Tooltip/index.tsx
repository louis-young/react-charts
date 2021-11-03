import type { TooltipProps } from "./types";

export const Tooltip = ({ tooltip }: TooltipProps) => {
  return (
    <p className="text-white font-medium py-2 px-8 bg-gray-800 bg-opacity-75 rounded-sm absolute top-12 left-12">
      {tooltip}
    </p>
  );
};
