import { useMemo, useState } from "preact/hooks";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { PostType, ProjectType } from "../types";

type Data = Partial<PostType> &
  Partial<ProjectType> & {
    published_at: string;
  };
const compareUpdatedAt = (a: Data, b: Data) => {
  const dateA = dayjs(a.published_at);
  const dateB = dayjs(b.published_at);
  return dateB.diff(dateA);
};

const offset = 6;

const useFetchAndLoadMore = (
  key: string,
  fetchData: () => Promise<unknown>
) => {
  const [page, setPage] = useState(1);

  const loadMore = () => setPage(page + 1);

  const { data, isLoading } = useQuery({
    queryKey: [key],
    queryFn: fetchData,
    gcTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const totalPage = useMemo(() => page * offset, [page]);
  const flattenedData = useMemo(
    () => (data as Array<Data>)?.flat?.() || [],
    [data]
  );
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
    showLoadMore,
  };
};

export default useFetchAndLoadMore;
