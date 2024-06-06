import React, { useEffect, useRef, useState } from "react";
import type { FC, ReactElement } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSwitch } from "react-icons/io";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux-toolkit/hooks";
import {
  closeModal,
  toggleFilterModal,
} from "../../../../redux-toolkit/reducers/modal/modal.reducer";
import { Tabs } from "../../Home.styles";
import {
  FilterActions,
  FilterIcon,
  FilterItem,
  FilterItemBody,
  FilterItemHeader,
  FilterModal,
  StickyFilter,
} from "./Filters.styles";
import { TabsElement, TabsStyles } from "../../../auth/auth-tabs/Auth.styles";
import useSticky from "../../../../hooks/useSticky";
import Modal from "../../../../components/modal/Modal";
import {
  IMovieCategories,
  IMovieCategory,
} from "../../../../interfaces/movie/movie.interface";
import { Arrow } from "../../../../components/dropdown/Dropdown.styles";
import { Category } from "../../../admin/movie/Movie.styles";
import { AnimatePresence } from "framer-motion";
import Button from "../../../../components/button/Button";
import { ButtonColor } from "../../../../components/button/Button.interface";
import { Flex } from "../../../../components/layout/globalStyles/global.styles";
import SortFilters from "./SortFilters";
import useDetectOutsideClick from "../../../../hooks/useDetectOutsideClick";
import {
  filterShows,
  clearFilters,
} from "../../../../redux-toolkit/reducers/shows/shows.reducer";

const variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 1, opacity: { duration: 1, delay: 0.5 } },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 1, opacity: { duration: 0 } },
  },
};

interface IFilters {
  type: string;
  setType: (type: string) => void;
}

const Filters: FC<IFilters> = ({ type, setType }): ReactElement => {
  const [toggleItem, setToggleItem] = useState<string>("");
  const [categories, setCategories] = useState<IMovieCategory[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const buttonRef = useRef<HTMLDivElement>(null);
  const [confirmReset, setConfirmReset] = useDetectOutsideClick(
    buttonRef,
    false
  );
  const isSticky = useSticky("filters");

  const { isFilterModal } = useAppSelector((state) => state.modal);
  const { showsList, filterCount } = useAppSelector((state) => state.shows);

  const dispatch: ReduxDispatch = useAppDispatch();

  const openModal = (): void => {
    dispatch(toggleFilterModal(true));
  };

  const close = (): void => {
    dispatch(closeModal());
  };

  const toggle = (name: string): void => {
    setToggleItem(name === toggleItem ? "" : name);
  };

  const handleCategoryFilter = (selectedCategory: IMovieCategories) => {
    const isCategorySelected = categories.includes(selectedCategory);

    if (isCategorySelected) {
      setCategories((prevSelected) =>
        prevSelected.filter((category) => category !== selectedCategory)
      );
    } else {
      setCategories((prevSelected) => [...prevSelected, selectedCategory]);
    }
  };

  const addFilters = () => {
    dispatch(
      filterShows({
        categories,
        alphabet: selectedFilter === "alphabet" ? true : false,
        latest: selectedFilter === "latest" ? true : false,
        showsList,
      })
    );
    dispatch(closeModal());
  };

  const confirmToReset = () => {
    setConfirmReset(true);
  };

  const resetFilters = () => {
    setConfirmReset(false);
    setCategories([]);
    setSelectedFilter(null);
    dispatch(
      filterShows({
        categories: [],
        alphabet: false,
        latest: false,
        showsList,
      })
    );
    dispatch(clearFilters({ showsList }));
    dispatch(closeModal());
  };

  useEffect(() => {
    console.log("categories", categories);
  }, [categories]);

  return (
    <FilterActions id="filters">
      <h3>now on screens</h3>
      {isSticky ? (
        <StickyFilter onClick={openModal}>
          <IoMdSwitch />
          <h4>filters</h4>
          {filterCount > 0 ? <span>{filterCount}</span> : null}
        </StickyFilter>
      ) : (
        <FilterIcon onClick={openModal}>
          <IoMdSwitch />
          <h4>filters</h4>
          {filterCount > 0 ? <span>{filterCount}</span> : null}
        </FilterIcon>
      )}

      <Tabs>
        <TabsStyles>
          <TabsElement
            $active={type === "Per movie"}
            onClick={() => setType("Per movie")}
          >
            <h5>Per movie</h5>
          </TabsElement>
          <TabsElement
            $active={type === "Per day"}
            onClick={() => setType("Per day")}
          >
            <h5>Per day</h5>
          </TabsElement>
        </TabsStyles>
      </Tabs>
      {isFilterModal ? (
        <Modal isOpen={isFilterModal} onClose={close} header={false}>
          <FilterModal>
            <FilterItem>
              <FilterItemHeader onClick={() => toggle("categories")}>
                <h4>categories</h4>
                <Arrow
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: toggleItem === "categories" ? 180 : 0,
                    originX: 0.5,
                  }}
                >
                  <IoIosArrowDown />
                </Arrow>
              </FilterItemHeader>

              <AnimatePresence>
                {toggleItem === "categories" ? (
                  <FilterItemBody
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    {Object.values(IMovieCategory).map((category) => (
                      <Category
                        key={category}
                        $selected={categories?.includes(category)}
                        onClick={() => handleCategoryFilter(category)}
                      >
                        {category}
                      </Category>
                    ))}
                  </FilterItemBody>
                ) : null}
              </AnimatePresence>
            </FilterItem>
            <FilterItem>
              <FilterItemHeader onClick={() => toggle("sort")}>
                <h4>sort</h4>
                <Arrow
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: toggleItem === "sort" ? 180 : 0,
                    originX: 0.5,
                  }}
                >
                  <IoIosArrowDown />
                </Arrow>
              </FilterItemHeader>

              <AnimatePresence>
                {toggleItem === "sort" ? (
                  <FilterItemBody
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <SortFilters
                      selectedFilter={selectedFilter}
                      setSelectedFilter={setSelectedFilter}
                    />
                  </FilterItemBody>
                ) : null}
              </AnimatePresence>
            </FilterItem>

            <FilterItem>
              <Flex $justify="space-between" $align="center">
                {!confirmReset ? (
                  <h5 onClick={confirmToReset}>Clear filters</h5>
                ) : null}
                {!confirmReset ? (
                  <Button color={ButtonColor.secondary} onClick={addFilters}>
                    <h4>Add Filters</h4>
                  </Button>
                ) : (
                  <Button color={ButtonColor.secondary} onClick={resetFilters}>
                    <h4>Reset Filters</h4>
                  </Button>
                )}
              </Flex>
            </FilterItem>
          </FilterModal>
        </Modal>
      ) : null}
    </FilterActions>
  );
};

export default Filters;
