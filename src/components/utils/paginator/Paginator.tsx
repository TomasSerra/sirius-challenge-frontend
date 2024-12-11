import ReactPaginate from "react-paginate";
import styles from "./Paginator.module.scss";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
};

const Paginator = ({
  currentPage,
  totalPages,
  handlePageClick,
}: PaginatorProps) => {
  return (
    <div className={styles["pagination-container"]}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.arrow}
        pageLinkClassName={styles.number}
        nextLinkClassName={styles.arrow}
        activeLinkClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </div>
  );
};

export default Paginator;
