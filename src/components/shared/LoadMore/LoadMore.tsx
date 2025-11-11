import { MouseEventHandler } from "react";
import { getLocale } from "../../../helpers";
import cn from "classnames";

const locale = getLocale();

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text?: string;
  className?: string;
};

const LoadMore = ({ onClick, text, className }: Props) => (
  <div className={cn("flex justify-center mb-2", className)}>
    <button
      onClick={onClick}
      className="bg-transparent underline text-indigo-500 text-sm"
    >
      {text || locale.pages.load_more}
    </button>
  </div>
);

export default LoadMore;
