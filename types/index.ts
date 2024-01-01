import { FormEvent, ChangeEvent, MouseEvent } from "react";

// Events
export type FormSubmitEvent = FormEvent<HTMLFormElement>;
export type FieldEvent = ChangeEvent<HTMLInputElement>;
export type ButtonEvent = MouseEvent<HTMLButtonElement>;
export type MenuItemEvent = MouseEvent<HTMLLIElement> | MouseEvent<HTMLButtonElement>;

// Components
export type Variant = "gradient" | "filled" | "outlined" | "text";
export type Color =
   | "white"
   | "amber"
   | "teal"
   | "cyan"
   | "lime"
   | "indigo"
   | "orange"
   | "pink"
   | "purple"
   | "red"
   | "blue"
   | "brown"
   | "gray"
   | "green"
   | "yellow"
   | "deep-orange"
   | "deep-purple"
   | "light-blue"
   | "light-green"
   | "blue-gray";
