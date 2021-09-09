import * as React from "react";

import styles from "./Card.module.scss";

interface Props {
  nameCandidate: string;
  comment: string;
  onClickPrev: any;
  onClickNext: any;
  onClickEdit: any;
}

export default function Card({
  nameCandidate,
  comment,
  onClickPrev,
  onClickNext,
  onClickEdit,
}: Props) {
  return (
    <div className={styles.content}>
      <div>
        <div className={styles.name}>{nameCandidate}</div>
        <div className={styles.comment}>{comment}</div>
      </div>
      <div className={styles.right}>
        <button className={styles.btnEdit} onClick={onClickEdit}>
          Edit
        </button>
        <div className={styles.btnPositions}>
          <button onClick={onClickPrev}> {"<"} </button>
          <button onClick={onClickNext}> {">"} </button>
        </div>
      </div>
    </div>
  );
}
