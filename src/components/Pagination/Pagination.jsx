import { useState } from "react";

const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;

const Pagination = ({ data, renderRow, pageSize = PAGE_SIZE }) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(data.length / pageSize);

  const dataToShow = data.slice(startIndex, endIndex);

  const handlePaginationBtn = (pageNo) => setCurrentPage(pageNo);
  const previousBtn = () => setCurrentPage(currentPage - 1);
  const nextBtn = () => setCurrentPage(currentPage + 1);

  return (
    <div>
      Pagination
      {dataToShow.map((item, idx) => {
        return (
          <div key={idx}>
            {renderRow(item)} {/* {item} */}
          </div>
        );
      })}
      <div className="paginationBtnContainer">
        {Array.from({ length: totalPages })?.map((_, idx) => {
          return (
            <button
              className="border p-1 m-1 cursor-pointer"
              key={idx}
              onClick={() => handlePaginationBtn(idx + 1)}
            >
              {idx + 1}
            </button>
          );
        })}

        <div>
          <button
            className="border p-1 m-1 cursor-pointer"
            onClick={previousBtn}
            disabled={currentPage === DEFAULT_PAGE}
          >
            Previous
          </button>
          <button
            className="border p-1 m-1 cursor-pointer"
            onClick={nextBtn}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
