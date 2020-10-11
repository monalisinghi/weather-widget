import React from "react";
import {
  displayTemperature,
  displayDistance,
  getDayName,
  humanReadableDate,
} from "./utils";

describe("Format temperature", () => {
  it("should return temperature in celsius", () => {
    expect(displayTemperature(12.74, true)).toEqual("13\u2103");
  });
  it("should return temperature in fahrenheit", () => {
    expect(displayTemperature(12.74)).toEqual("55\u2109");
  });
});

describe("Format distance", () => {
  it("should return distance in kilometers", () => {
    expect(displayDistance(8.472856231517273, true)).toEqual("15 kp/h");
  });
  it("should return temperature in miles", () => {
    expect(displayDistance(8.472856231517273)).toEqual("8 mph");
  });
});

describe("Return weekday name", () => {
  it("should return weekday name", () => {
    expect(getDayName("2020-10-10")).toEqual("Saturday");
  });
});

describe("Should convert date ", () => {
  it("should convert date to human readable format", () => {
    expect(humanReadableDate("2020-10-10")).toEqual("Saturday, October 10");
  });
});
