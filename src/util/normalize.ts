import { CLASS_MAP } from "./servantClassMap";

export function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function normalizeClass(className: string) {
  return CLASS_MAP[className] ?? className;
}
