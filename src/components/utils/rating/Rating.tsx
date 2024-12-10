import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./Rating.module.scss";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const [color, setColor] = useState<string>("#06883C");
  const tooltipId = useState<number>(Math.floor(Math.random() * 1000));

  useEffect(() => {
    if (rating >= 0 && rating < 40) {
      setColor("#881906");
    } else if (rating >= 40 && rating < 70) {
      setColor("#DF7A14");
    } else {
      setColor("#06883C");
    }
  }, [rating]);

  return (
    <>
      <div
        data-tooltip-id={"rating-tooltip-" + tooltipId}
        data-tooltip-content={"Metacritic"}
        className={styles.rating}
        style={{
          backgroundColor: color,
        }}
      >
        {rating}
      </div>
      <Tooltip id={"rating-tooltip-" + tooltipId} />
    </>
  );
};

export default Rating;
