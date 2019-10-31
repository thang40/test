import { getAuthData } from "./auth.service";

test("basic", () => {
  expect(getAuthData()).toBe(0);
});
