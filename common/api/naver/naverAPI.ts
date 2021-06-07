import naverAxios from 'common/api/naver/naverAxios';
import { POSTS_PER_PAGE } from 'share/constant';
import { PagedNaverBooks } from 'share/interfaces/naverBook';

const naverAPI = {
  searchBookByKeyword: async (keyword: string, start: number): Promise<PagedNaverBooks> => {
    const pagedBooks = await naverAxios
      .get(`?query=${keyword}&display=${POSTS_PER_PAGE}&start=${start}`)
      .catch((err) => {
        console.error(err);
        return null;
      });

    return pagedBooks;
  },
};

export default naverAPI;
