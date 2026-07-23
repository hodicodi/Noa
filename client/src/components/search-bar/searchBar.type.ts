import { ChangeEvent } from "react";

export type SearchBarProps = {
  searchQuery: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement, Element>) => void;
};