import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./hooks/useAuth";

test("renders the login page when logged out", () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>
  );

  expect(
    screen.getByText(/log into your dashboard account/i)
  ).toBeInTheDocument();
});
