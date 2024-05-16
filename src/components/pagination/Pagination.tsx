import React from "react";
import type { FC, ReactElement } from "react";
import { Pages, PaginationStyles, Btn } from "./Pagination.styles";
import Button from "../button/Button";
import { ButtonColor } from "../button/Button.interface";

const PAGE_SIZE = 10;

interface IPagination {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  total: number;
}

const Pagination: FC<IPagination> = ({
  currentPage,
  setCurrentPage,
  total,
}): ReactElement => {
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <PaginationStyles>
      <Btn>
        <Button
          color={
            currentPage === 1 ? ButtonColor.disabled : ButtonColor.pagination
          }
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <h6>Previous</h6>
        </Button>
      </Btn>
      <Pages>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            color={
              currentPage === index + 1
                ? ButtonColor.active
                : ButtonColor.pagination
            }
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            <h6>{index + 1}</h6>
          </Button>
        ))}
      </Pages>
      <Btn>
        <Button
          color={
            totalPages === currentPage
              ? ButtonColor.disabled
              : ButtonColor.pagination
          }
          disabled={totalPages === currentPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <h6>Next</h6>
        </Button>
      </Btn>
    </PaginationStyles>
  );
};

export default Pagination;
