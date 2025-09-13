import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
	it("should render input field", () => {
		render(<App />);
		const inputField = screen.getByTestId("input");
		expect(inputField).toBeInTheDocument();
	});
});
