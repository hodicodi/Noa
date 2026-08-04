export type ColumnValue = {
  value?: string;
  isCheckbox: boolean;
  isChecked?: boolean;
};

export type PreviewProps = {
  toggleEditMode: () => void;
  columnValues: ColumnValue[];
};
