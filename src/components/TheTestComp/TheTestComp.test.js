import { render, screen, fireEvent } from "@testing-library/react";
import { sum } from "./utils";
import TheTestComp from "./TheTestComp";

test("should be truthy", () => {
  expect(true).toBeTruthy();
});

test("should return sum of two numbers", () => {
  const result = sum(2, 4);
  expect(result).toBe(6);
});

test("should render heading element on UI", () => {
  render(<TheTestComp />);
  const h1Element = screen.getByText(/Test component works./i);
  expect(h1Element).not.toBeNull();
});

test("should render 'Toggle is true' when component loaded", () => {
  render(<TheTestComp />);
  const pElement = screen.queryByText(/Toggle is true/i);
  expect(pElement).not.toBeNull();
});

test("should not render 'Toggle is true' when button is clicked", () => {
  render(<TheTestComp />);
  const btnElement = screen.queryByRole("button");
  fireEvent.click(btnElement);
  const pElement = screen.queryByText(/Toggle is true/i);
  expect(pElement).toBeNull();
});

test("should render 'Toggle is false' when button is clicked", () => {
  render(<TheTestComp />);
  const btnElement = screen.queryByRole("button");
  fireEvent.click(btnElement);
  const pElement = screen.queryByText(/Toggle is false/i);
  expect(pElement).not.toBeNull();
});
