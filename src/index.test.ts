import { act, renderHook } from "@testing-library/react-hooks";
import useSwitchState from "./index";

it("switch state on", () => {
  const { result } = renderHook(() => useSwitchState());
  expect(result.current.value).toBe(false);
  act(() => result.current.switchOn());
  expect(result.current.value).toBe(true);
});

it("switch state off", () => {
  const { result } = renderHook(() => useSwitchState(true));
  expect(result.current.value).toBe(true);
  act(() => result.current.switchOff());
  expect(result.current.value).toBe(false);
});

it("switch state on and off", () => {
  const { result } = renderHook(() => useSwitchState());
  expect(result.current.value).toBe(false);
  act(() => result.current.switchOnOff());
  expect(result.current.value).toBe(true);
  act(() => result.current.switchOnOff());
  expect(result.current.value).toBe(false);
});
