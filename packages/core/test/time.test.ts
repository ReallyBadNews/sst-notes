import { expect, describe, test } from "vitest";
import { now } from "../src/time";

describe("now", () => {
  test("should return the current time in ISO format", () => {
    const currentTime = now();
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    expect(currentTime).toMatch(regex);
  });

  test("should return a time close to the current time", () => {
    const currentTime = now();
    const nowTime = new Date().toISOString();
    const currentTimeDate = new Date(currentTime);
    const nowTimeDate = new Date(nowTime);
    const difference = Math.abs(
      currentTimeDate.getTime() - nowTimeDate.getTime()
    );
    console.log("difference", difference);
    expect(difference).toBeLessThan(5);
  });
});
