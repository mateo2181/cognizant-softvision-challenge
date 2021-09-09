import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import {Candidate} from "../../types/candidate";

import styles from "./NewCandidate.module.scss";

interface Props {
  submitForm: any;
  submitUpdateForm: any;
  onClose: any;
  candidateEditing: Candidate | null;
}

export default function NewCandidate({
  submitForm,
  submitUpdateForm,
  onClose,
  candidateEditing,
}: Props) {
  const {register, setValue, handleSubmit} = useForm();

  useEffect(() => {
    if (candidateEditing) {
      setValue("name", candidateEditing.name, {shouldValidate: true});
      setValue("comments", candidateEditing.comments, {shouldValidate: true});
    }

    return () => {};
  }, [candidateEditing, setValue]);

  function onSubmit(data: any) {
    if (!candidateEditing) submitForm(data);
    else submitUpdateForm(candidateEditing.id, data);
  }

  const title = candidateEditing ? "Edit Candidate" : "New Candidate";

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <form
          className={styles.form}
          data-cy="new-candidate-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input {...register("name")} required placeholder="Candidate Name" type="text" />
          <textarea {...register("comments")} cols={30} placeholder="Comments" rows={10} />
          <button type="submit"> {candidateEditing ? "Update" : "Add"} </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
