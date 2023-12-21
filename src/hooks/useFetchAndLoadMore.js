import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';

const compareUpdatedAt = (a, b) => {
  const dateA = dayjs(a.pushed_at);
  const dateB = dayjs(b.pushed_at);
  return dateB.diff(dateA);
};

const offset = 5;

const useFetchAndLoadMore = (key, fetchData) => {
  const [page, setPage] = useState(1);

  const loadMore = () => setPage(page + 1);

  const { data, isLoading } = useQuery({
    queryKey: key,
    queryFn: fetchData,
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  const totalPage = useMemo(() => page * offset, [page]);
  const flattenedData = useMemo(() => data?.flat?.() || [], [data]);
  const sortedData = useMemo(
    () => flattenedData?.sort?.(compareUpdatedAt),
    [flattenedData]
  );
  const chunkedData = useMemo(
    () => sortedData.slice(0, totalPage),
    [sortedData, totalPage]
  );
  const showLoadMore = useMemo(
    () => totalPage < flattenedData?.length,
    [totalPage, flattenedData?.length]
  );

  return {
    loadMore,
    loading: isLoading,
    data: chunkedData,
    showLoadMore
  };
};

export default useFetchAndLoadMore;
