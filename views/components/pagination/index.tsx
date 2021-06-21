import { calculateSectionsByFivePage } from 'common/utils/paginate';
import React from 'react';
import { PaginationButton } from './button';
import * as S from './styles';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  maxPage,
  updatePage,
  columnStyle,
}) => {
  const pagesSection = calculateSectionsByFivePage(currentPage, maxPage);

  const isFirstSection = pagesSection[0] === 1;
  const isLastSection = pagesSection[pagesSection.length - 1] === maxPage;

  return (
    <S.PaginationBar columnStyle={columnStyle}>
      {!isFirstSection && (
        <S.ArrowBlock onClick={updatePage(currentPage - 1)}>
          <S.Arrow className='left' columnStyle={columnStyle}></S.Arrow>
        </S.ArrowBlock>
      )}

      <S.ButtonContainer columnStyle={columnStyle}>
        {!!pagesSection.length &&
          pagesSection.map((pageIndex) => (
            <PaginationButton
              key={pageIndex}
              number={pageIndex}
              focus={pageIndex === currentPage}
              onClick={updatePage(pageIndex)}
            />
          ))}
      </S.ButtonContainer>

      {!isLastSection && (
        <S.ArrowBlock onClick={updatePage(currentPage + 1)}>
          <S.Arrow className='right' columnStyle={columnStyle}></S.Arrow>
        </S.ArrowBlock>
      )}
    </S.PaginationBar>
  );
};

export default React.memo(Pagination);
