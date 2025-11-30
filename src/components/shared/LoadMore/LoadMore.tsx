import { MouseEventHandler } from "preact/compat";
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
      className="bg-transparent underline text-indigo-600 dark:text-indigo-400 text-sm hover:text-indigo-700 dark:hover:text-indigo-300"
    >
      {text || locale.pages.load_more}
    </button>
  </div>
);

export default LoadMore;
