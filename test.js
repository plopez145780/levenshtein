import { levenshtein, similarite } from "./src/index.js";
import test from "ava";

test("levenshtein", (t) => {
  [
    ["niche", "chien", 4],
    ["maison", "maçon", 2],
  ].forEach(([a, b, attendu]) => {
    t.is(levenshtein(a, b), attendu);
  });
});

test("similarite", (t) => {
  [
    ["niche", "chien", 20],
    ["maison", "maçon", 66.66],
    ["maçon", "maison", 60],
  ].forEach(([a, b, attendu]) => {
    t.is(similarite(a, b), attendu);
  });
});