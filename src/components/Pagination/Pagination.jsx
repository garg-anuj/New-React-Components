import { useState } from "react";

const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;
const MAX_BUTTON_DISPLAY = 6;

const Pagination = ({ data, renderRow, pageSize = PAGE_SIZE }) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(data.length / pageSize);

  const dataToShow = data.slice(startIndex, endIndex);

  const pagesButtons = Array.from({ length: totalPages }, (_, index) => index);
  const maxButtons = MAX_BUTTON_DISPLAY;

  let buttonStartIndex = currentPage - Math.floor(maxButtons / 2);
  let buttonEndIndex = currentPage + Math.floor(maxButtons / 2);

  if (buttonStartIndex < 1) {
    buttonStartIndex = 1;
    buttonEndIndex = Math.min(totalPages, maxButtons);
  }

  if (buttonEndIndex > totalPages) {
    buttonEndIndex = totalPages;
    buttonStartIndex = Math.max(1, totalPages - maxButtons + 1);
  }
  console.log("buttonStartIndex == ", buttonStartIndex);
  console.log("buttonEndIndex == ", buttonEndIndex);

  const buttonToDisplay = pagesButtons.slice(buttonStartIndex, buttonEndIndex);
  console.log(pagesButtons);
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
        {buttonToDisplay?.map((pageNumber) => {
          return (
            <button
              className="border p-1 m-1 cursor-pointer"
              key={pageNumber}
              onClick={() => handlePaginationBtn(pageNumber)}
            >
              {pageNumber}
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
