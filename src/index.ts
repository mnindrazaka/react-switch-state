import React from "react";

export default function useSwitchState(defaultValue?: boolean) {
  const [value, setValue] = React.useState<boolean>(defaultValue ?? false);

  const switchOn = React.useCallback(() => {
    setValue(true);
  }, []);

  const switchOff = React.useCallback(() => {
    setValue(false);
  }, []);

  const switchOnOff = React.useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return { value, setValue, switchOn, switchOff, switchOnOff };
}
