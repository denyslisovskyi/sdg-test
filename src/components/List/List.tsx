import { ReactNode } from "react";
import styles from "./List.module.scss";
import { Typography } from "@/components";

export type StepContent = string | ReactNode;

export interface Step {
  id: number;
  content: StepContent;
}

interface ListProps {
  steps: Step[];
}

const List = ({ steps }: ListProps) => {
  const renderStepContent = (content: StepContent) => {
    if (typeof content === "string") {
      return <Typography variant="h2">{content}</Typography>;
    }

    return content;
  };

  return (
    <ol className={styles.stepsList}>
      {steps.map((step) => (
        <li key={step.id} className={styles.stepItem}>
          <div className={styles.stepNumber}>{step.id}.</div>
          <div className={styles.stepContent}>
            {renderStepContent(step.content)}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default List;
