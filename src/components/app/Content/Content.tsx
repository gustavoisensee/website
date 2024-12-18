import { Suspense, lazy } from 'react';
import useHash from '../../../hooks/useHash';
import { hashtags } from '../../../consts';
import { getLocale } from '../../../helpers';
import Loading from '../../shared/Loading';
import Link from './Link';

const locale = getLocale();

const AboutLazy = lazy(() => import('../../../pages/About'));
const ProjectsLazy = lazy(() => import('../../../pages/Projects'));
const CareerLazy = lazy(() => import('../../../pages/Career'));
const BlogLazy = lazy(() => import('../../../pages/Blog'));


const getTabComponent = (hash: string) =>
  ({
    [hashtags.about]: AboutLazy,
    [hashtags.projects]: ProjectsLazy,
    [hashtags.blog]: BlogLazy,
    [hashtags.career]: CareerLazy
  })[hash] || AboutLazy;

const Content = () => {
  const hash = useHash();
  const TabContent = getTabComponent(hash);

  return (
    <div>
      <div className='flex flex-wrap my-8'>
        <Link hashSource={hashtags.about} title={locale?.hashtags?.about} />
        <Link
          hashSource={hashtags.projects}
          title={locale?.hashtags?.projects}
        />
        <Link hashSource={hashtags.blog} title={locale?.hashtags?.blog} />
        <Link hashSource={hashtags.career} title={locale?.hashtags?.career} />
      </div>
      <Suspense fallback={<Loading />}>
        <TabContent />
      </Suspense>
    </div>
  );
};

export default Content;
