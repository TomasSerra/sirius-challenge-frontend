import Button from "@/components/ui/button/Button";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import { GameFilters } from "@/types/filters";
import { CiFilter } from "react-icons/ci";
import styles from "./Filters.module.scss";
import { OrderByOptions } from "@/types/ordering";

type FiltersSelectorsProps = {
  filters: GameFilters;
  setFilters: (filters: GameFilters) => void;
  setFiltersOpen: (open: boolean) => void;
};

const Filters = ({
  filters,
  setFilters,
  setFiltersOpen,
}: FiltersSelectorsProps) => {
  return (
    <div className={styles["filter-buttons-container"]}>
      <Dropdown
        options={OrderByOptions}
        initialValue={filters.ordering}
        onChange={(values) => {
          setFilters({ ...filters, ordering: values[0].value });
        }}
      />
      <Button
        text="Filter"
        width="100px"
        isFilled={false}
        icon={<CiFilter />}
        onClick={() => {
          setFiltersOpen(true);
        }}
      />
    </div>
  );
};

export default Filters;
