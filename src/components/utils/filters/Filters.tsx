import Button from "@/components/ui/button/Button";
import styles from "./Filters.module.scss";
import CheckersList from "./checkers/CheckersList";
import { IoClose } from "react-icons/io5";
import { GameFilters } from "@/types/filters";
import { useState } from "react";
import { GenreInfo } from "@/types/genresInfo";

const platforms: { id: string; name: string }[] = [
  { id: "1", name: "PC" },
  { id: "2", name: "PlayStation" },
  { id: "3", name: "Xbox" },
  { id: "4", name: "iOS" },
  { id: "5", name: "Mac" },
  { id: "6", name: "Linux" },
  { id: "7", name: "Nintendo" },
  { id: "8", name: "Android" },
];

const tags: { id: string; name: string }[] = [
  { id: "singleplayer", name: "Singleplayer" },
  { id: "multiplayer", name: "Multiplayer" },
  { id: "cooperative", name: "Co-op" },
  { id: "survival", name: "Survival" },
  { id: "open-world", name: "Open World" },
  { id: "free", name: "Free" },
];

type FFiltersSelectorProps = {
  close: () => void;
  onApply: (filters?: GameFilters) => void;
  initialFilters?: GameFilters;
  genres?: GenreInfo[];
};

const FiltersSelector = ({
  close,
  onApply,
  initialFilters,
  genres,
}: FFiltersSelectorProps) => {
  const [checkedProps, setCheckedProps] = useState<GameFilters>(
    initialFilters || {}
  );

  const [metacritic, setMetacritic] = useState<{ min: string; max: string }>({
    min: initialFilters?.metacritic?.split(",")[0] || "1",
    max: initialFilters?.metacritic?.split(",")[1] || "100",
  });

  const [metacriticError, setMetacriticError] = useState("");
  const [applyError, setApplyError] = useState("");

  const handleApply = () => {
    if (metacriticHasErrors(metacritic.min, metacritic.max)) {
      setApplyError("Please fix the errors before applying the filters");
      return;
    }
    setApplyError("");
    onApply(checkedProps);
    close();
  };

  const handleMetacriticMinChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const minValue = e.target.value;
    setMetacritic({ ...metacritic, min: minValue });
    if (metacriticHasErrors(minValue, metacritic.max)) return;
    setCheckedProps({
      ...checkedProps,
      metacritic: minValue + "," + metacritic.max,
    });
  };

  const handleMetacriticMaxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const maxValue = e.target.value;
    setMetacritic({ ...metacritic, max: maxValue });
    if (metacriticHasErrors(metacritic.min, maxValue)) return;
    setCheckedProps({
      ...checkedProps,
      metacritic: metacritic.min + "," + maxValue,
    });
  };

  const metacriticHasErrors = (minValue: string, maxValue: string): boolean => {
    const min = parseInt(minValue);
    const max = parseInt(maxValue);
    setMetacriticError("");
    if (min < 1 || min > 100 || max < 1 || max > 100) {
      setMetacriticError("Values must be between 1 and 100");
      return true;
    }
    if (min > max) {
      setMetacriticError("Min value must be less than max value");
      return true;
    }
    return false;
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <button onClick={close} className={styles.close}>
          <IoClose />
        </button>
        <h2>Filters</h2>
        <div className={styles["filters-container"]}>
          <section className={styles.group}>
            <h3>Platforms</h3>
            <CheckersList
              initialCheckedProps={
                checkedProps.parent_platforms?.split(",") || []
              }
              options={platforms}
              onChange={(props) =>
                setCheckedProps({
                  ...checkedProps,
                  parent_platforms:
                    props.join(",") != "" ? props.join(",") : undefined,
                })
              }
            />
          </section>
          <section className={styles.group}>
            <h3>Tags</h3>
            <CheckersList
              initialCheckedProps={checkedProps.tags?.split(",") || []}
              options={tags}
              onChange={(props) =>
                setCheckedProps({
                  ...checkedProps,
                  tags: props.join(",") != "" ? props.join(",") : undefined,
                })
              }
            />
          </section>
          <section className={styles.group}>
            <h3>Genres</h3>
            <CheckersList
              initialCheckedProps={checkedProps.genres?.split(",") || []}
              options={
                genres?.map((genre) => ({ id: genre.id, name: genre.text })) ||
                []
              }
              onChange={(props) =>
                setCheckedProps({
                  ...checkedProps,
                  genres: props.join(",") != "" ? props.join(",") : undefined,
                })
              }
            />
          </section>
          <section className={styles.group}>
            <h3>Metacritic</h3>
            <div className={styles.metacritic}>
              <label>Min</label>
              <input
                type="number"
                placeholder="1"
                min={1}
                max={100}
                value={metacritic.min}
                onChange={(e) => {
                  handleMetacriticMinChange(e);
                }}
              />
              <label>Max</label>
              <input
                type="number"
                placeholder="100"
                min={1}
                max={100}
                value={metacritic.max}
                onChange={(e) => {
                  handleMetacriticMaxChange(e);
                }}
              />
            </div>
            <span className={styles.error}>{metacriticError}</span>
          </section>
        </div>
        {applyError && applyError !== "" && (
          <span className={styles.error}>{applyError}</span>
        )}
        <div className={styles["apply-button"]}>
          <Button text="Apply Filters" width="100%" onClick={handleApply} />
        </div>
      </div>
    </div>
  );
};

export default FiltersSelector;
