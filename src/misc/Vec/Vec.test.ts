import { expect, test } from "vitest";
import { Gen } from "../Gen";
import { Vec } from ".";

test("nsew", () => {
  const offsets = Gen.collect(Vec.nsew(Vec.make(3, 5)));
  expect(offsets).toEqual([
    Vec.make(3, 6),
    Vec.make(3, 4),
    Vec.make(4, 5),
    Vec.make(2, 5),
  ]);
});

test("iter", () => {
  const actual = Gen.collect(Vec.iter(Vec.make(2, 3)));
  expect(actual).toEqual([
    Vec.make(0, 0),
    Vec.make(1, 0),
    Vec.make(0, 1),
    Vec.make(1, 1),
    Vec.make(0, 2),
    Vec.make(1, 2),
  ]);
});
