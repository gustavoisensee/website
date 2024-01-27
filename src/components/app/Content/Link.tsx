import useHash from '../../../hooks/useHash';
import { hashtags } from '../../../consts';

type Props = {
  hashSource: string;
  title: string;
}

const isTabActive = (flag: boolean) =>
  flag ? 'text-indigo-500 bg-gray-100 rounded-lg' : 'underline';

const Link = ({ hashSource, title }: Props) => {
  const hash = useHash();
  const hasHash = Object.values(hashtags).includes(hash);
  const noHashAndAboutTab = !hasHash && hashSource === hashtags.about;

  return (
    <a
      className={`mr-1 sm:mr-4 font-semibold p-2 ${isTabActive(
        hashSource === hash || noHashAndAboutTab
      )}`}
      href={hashSource}
    >
      {title}
    </a>
  );
};

export default Link;
