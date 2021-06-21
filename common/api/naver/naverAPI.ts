import naverAxios from 'common/api/naver/naverAxios';
import { PagedNaverBooks } from 'share/interfaces/naverBook';

const naverAPI = {
  searchBookByKeyword: async (
    keyword: string,
    perPage: number,
    start: number
  ): Promise<PagedNaverBooks> => {
    const pagedBooks = await naverAxios
      .get(`?query=${keyword}&display=${perPage}&start=${start}`)
      .catch(() => {
        return null;
      });

    return pagedBooks;
  },
};

export default naverAPI;
