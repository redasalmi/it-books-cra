import RcPagination from 'react-js-pagination';

import styles from './Pagination.module.scss';

const Pagination = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  handlePageChange,
}) => (
  <div className={styles.container}>
    <RcPagination
      activePage={parseInt(activePage)}
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
