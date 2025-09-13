import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import UserEvent from "@testing-library/user-event";

describe("App", () => {
	it("should render input field", () => {
		render(<App />);
		const inputField = screen.getByTestId("input");
		expect(inputField).toBeInTheDocument();
	});
	it("should render input content when user types in the text field", async () => {
		render(<App />);
		const inputField = screen.getByTestId("input");
		const user = UserEvent;
		await user.type(inputField, "Pravin");

		const para = screen.getByTestId("input-content");
		expect(para).toHaveTextContent(/Pravin/i);
	});
});
