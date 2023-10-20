import React from "react";
import { useDispatch } from "react-redux";
import {
  FormMobile,
  FormPersonal,
  FormEducation,
  FormExperience,
} from "../index";
import styles from "./index.module.css";

export const Form = ({ handlePrint }) => {
  const dispatch = useDispatch();

  const handleResetData = (setter) => {
    dispatch(setter([]));
  };

  return (
    <div className={styles.form}>
      <FormMobile />
      <FormPersonal />
      <FormEducation handleResetData={handleResetData} />
      <FormExperience handleResetData={handleResetData} />
    </div>
  );
};
