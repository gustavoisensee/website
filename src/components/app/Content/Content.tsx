import { Suspense, lazy, useEffect, useState } from 'preact/compat';
import useHash from '../../../hooks/useHash';
import { hashtags } from '../../../consts';
import { getLocale } from '../../../helpers';
import { cx } from '../../../helpers/cx';
import Loading from '../../shared/Loading';
import Link from './Link';
import styles from './Content.module.css';

const locale = getLocale();
const FADE_MS = 200;

const AboutLazy = lazy(() => import('../../../pages/About'));
const ProjectsLazy = lazy(() => import('../../../pages/Projects'));
const CareerLazy = lazy(() => import('../../../pages/Career'));
const BlogLazy = lazy(() => import('../../../pages/Blog'));

const getTabComponent = (hash: string) =>
  ({
    [hashtags.about]: AboutLazy,
    [hashtags.projects]: ProjectsLazy,
    [hashtags.blog]: BlogLazy,
    [hashtags.career]: CareerLazy,
  })[hash] || AboutLazy;

const Content = () => {
  const hash = useHash();
  const [activeHash, setActiveHash] = useState(hash);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (hash === activeHash) return;

    setFading(true);
    const timer = window.setTimeout(() => {
      setActiveHash(hash);
      setFading(false);
    }, FADE_MS);

    return () => window.clearTimeout(timer);
  }, [hash, activeHash]);

  const TabContent = getTabComponent(activeHash);

  return (
    <div>
      <nav className="flex flex-wrap my-8" role="tablist" aria-label="Content sections">
        <Link hashSource={hashtags.about} title={locale?.hashtags?.about} />
        <Link hashSource={hashtags.projects} title={locale?.hashtags?.projects} />
        <Link hashSource={hashtags.blog} title={locale?.hashtags?.blog} />
        <Link hashSource={hashtags.career} title={locale?.hashtags?.career} />
      </nav>
      <div
        className={cx(styles.panel, fading && styles.panelHidden)}
        role="tabpanel"
      >
        <Suspense fallback={<Loading />}>
          <TabContent key={activeHash} />
        </Suspense>
      </div>
    </div>
  );
};

export default Content;
