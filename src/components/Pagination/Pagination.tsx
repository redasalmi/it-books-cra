import RcPagination from 'react-js-pagination';

import styles from './Pagination.module.scss';

interface PaginationProps {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  handlePageChange: (page: number) => void;
}

const Pagination = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  handlePageChange,
}: PaginationProps) => (
  <div className={styles.container}>
    <RcPagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      onChange={handlePageChange}
      innerClass={styles.pagination}
      itemClass={styles.item}
      activeClass={styles.activeItem}
      disabledClass={styles.disabledItem}
      linkClass={styles.link}
      activeLinkClass={styles.activeLink}
    />
  </div>
);

export default Pagination;
