import useHash from "../../../hooks/useHash";
import { hashtags } from "../../../consts";

type Props = {
  hashSource: string;
  title: string;
};

const isTabActive = (flag: boolean) =>
  flag
    ? "text-indigo-500 dark:text-indigo-400 bg-gray-100 dark:bg-gray-800 rounded-lg"
    : "underline hover:text-indigo-500 dark:hover:text-indigo-400";

const Link = ({ hashSource, title }: Props) => {
  const hash = useHash();
  const hasHash = Object.values(hashtags).includes(hash);
  const noHashAndAboutTab = !hasHash && hashSource === hashtags.about;

  const isActive = hashSource === hash || noHashAndAboutTab;

  return (
    <a
      className={`mr-1 sm:mr-4 font-semibold p-2 ${isTabActive(isActive)}`}
      href={hashSource}
      role="tab"
      aria-selected={isActive}
      aria-current={isActive ? "page" : undefined}
    >
      {title}
    </a>
  );
};

export default Link;
