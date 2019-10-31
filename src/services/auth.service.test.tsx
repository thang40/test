import { getAuthData } from "./auth.service";

test("bas2ic", () => {
  expect(getAuthData()).toBe(0);
});
