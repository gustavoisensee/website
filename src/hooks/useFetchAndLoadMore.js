import { useEffect, useState } from 'react';
import chunk from 'lodash.chunk';
import dayjs from 'dayjs'

import { scrollToTheBottom } from '../helpers';

const compareUpdatedAt = (a, b) => {
  const dateA = dayjs(a.pushed_at);
  const dateB = dayjs(b.pushed_at);
  return dateB.diff(dateA);
};

const useFetchAndLoadMore = (fetchData) => {
  const [chunks, setChunks] = useState({
    index: 0,
    total: 0,
    allChunks: [],
  });
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMore = () => {
    if (chunks.index < chunks.total) {
      setData([...data, ...chunks.allChunks[chunks.index + 1]]);
      setChunks({ ...chunks, index: chunks.index + 1 });
      setTimeout(scrollToTheBottom, 200);
    }
  };

  const getData = async () => {
    const _data = await fetchData();
    const flattenedData = _data?.flat?.() || [];
    const data = flattenedData.sort(compareUpdatedAt);
    const _chunks = chunk(data, 5);
    setData(_chunks[0]);
    setChunks({
      index: 0,
      total: _chunks?.length || 0,
      allChunks: _chunks,
    });
    setLoading(false);
  };

  const showLoadMore = chunks.index < chunks.total - 1;

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);

  return {
    loadMore,
    loading,
    data,
    showLoadMore
  }
}

export default useFetchAndLoadMore;
