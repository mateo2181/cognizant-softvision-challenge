import * as React from "react";

import {Candidate} from "../../types/candidate";
import Card from "../Card";

import styles from "./Column.module.scss";

interface Props {
  name: string;
  candidates: Candidate[];
  onClickPrev: any;
  onClickNext: any;
  onClickEdit: any;
  firstColumn?: boolean;
  newCandidate?: any;
}

export default function Column({
  name,
  candidates,
  onClickPrev,
  onClickNext,
  onClickEdit,
  firstColumn = false,
  newCandidate,
}: Props) {
  return (
    <div className={styles.column}>
      <h2 className={styles.title} role="heading">
        {name}
      </h2>
      <div className={styles.content} data-testid="list">
        {candidates.length ? (
          candidates.map((candidate: Candidate) => (
            <Card
              key={candidate.id}
              comment={candidate.comments}
              nameCandidate={candidate.name}
              onClickEdit={() => onClickEdit(candidate)}
              onClickNext={() => onClickNext(candidate.id)}
              onClickPrev={() => onClickPrev(candidate.id)}
            />
          ))
        ) : (
          <div className={styles.noContent}> Not candidates </div>
        )}
      </div>
      {firstColumn && (
        <button className={styles.add} data-cy="add-candidate" onClick={newCandidate}>
          Add Candidate
        </button>
      )}
    </div>
  );
}
