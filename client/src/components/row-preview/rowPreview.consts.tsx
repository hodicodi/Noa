export type ColumnValue = {
  value?: string;
  isChecked?: boolean;
};

export type PreviewProps = {
  toggleEditMode: () => void;
  columnValues: ColumnValue[];
};