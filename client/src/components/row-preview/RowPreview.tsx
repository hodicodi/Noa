import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, TableCell } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Styles from "../handle-user-row/handleUserRow.style.ts";

export type ColumnValue = {
  value?: string;
  isCheckbox: boolean;
};

type PreviewProps = {
  toggleEditMode: () => void;
  columnValues: ColumnValue[];
};

const RowPreview: FC<PreviewProps> = ({ columnValues, toggleEditMode }) => (
    <>
      {columnValues.map((columnValue) =>
        columnValue.isCheckbox ? (
          <TableCell sx={Styles.tableCell} align="center">
              <Checkbox sx={Styles.checkbox} disabled={true} checked={!!columnValue.value} />
          </TableCell>
        ) : (
          <TableCell sx={Styles.tableCell} component="th" scope="row">
            {columnValue.value? columnValue.value : ""}
          </TableCell>
        ),
      )}
      <TableCell onClick={toggleEditMode} sx={Styles.tableCell} align="center">
        <EditIcon />
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center" />
    </>
  );


export default RowPreview;
