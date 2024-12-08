import styles from "./Metrics.module.scss";
import MetricItem from "./item/MetricItem";

type MetricsProps = {
  exceptional?: number;
  recommended?: number;
  meh?: number;
  skip?: number;
};

const Colors = {
  exceptional: "#69B131",
  recommended: "#506FD5",
  meh: "#F89235",
  skip: "#F62C3B",
};

const Metrics = ({
  exceptional = 0,
  recommended = 0,
  meh = 0,
  skip = 0,
}: MetricsProps) => {
  let total: number = exceptional + recommended + meh + skip;
  if (
    exceptional == undefined ||
    recommended == undefined ||
    meh == undefined ||
    skip == undefined
  ) {
    total = 0;
  }
  let exceptionalPercent = 0;
  let recommendedPercent = 0;
  let mehPercent = 0;
  let skipPercent = 0;
  if (total > 0) {
    exceptionalPercent = (exceptional / total) * 100;
    recommendedPercent = (recommended / total) * 100;
    mehPercent = (meh / total) * 100;
    skipPercent = (skip / total) * 100;
  }

  return (
    <>
      {(exceptional || recommended || meh || skip) && total > 0 ? (
        <div className={styles.container}>
          <div className={styles["metric-box"]}>
            <div
              style={{
                width: `${exceptionalPercent}%`,
                backgroundColor: Colors.exceptional,
              }}
            ></div>
            <div
              style={{
                width: `${recommendedPercent}%`,
                backgroundColor: Colors.recommended,
              }}
            ></div>
            <div
              style={{
                width: `${mehPercent}%`,
                backgroundColor: Colors.meh,
              }}
            ></div>
            <div
              style={{
                width: `${skipPercent}%`,
                backgroundColor: Colors.skip,
              }}
            ></div>
          </div>
          <div className={styles["text-container"]}>
            <MetricItem
              color={Colors.exceptional}
              text="Exceptional"
              value={exceptional}
            />
            <MetricItem
              color={Colors.recommended}
              text="Recommended"
              value={recommended}
            />
            <MetricItem color={Colors.meh} text="Meh" value={meh} />
            <MetricItem color={Colors.skip} text="Skip" value={skip} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Metrics;
