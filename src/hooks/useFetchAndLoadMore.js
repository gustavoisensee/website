import chunk from 'lodash.chunk';
import { useEffect, useState } from 'react';
import { scrollToTheBottom } from '../helpers';

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
    const data = await fetchData();
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
