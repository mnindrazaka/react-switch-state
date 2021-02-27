# react-switch-state
React hook for switching state on and off

## Install

```bash
npm install react-switch-state
```

## Usage

```javascript
import useSwitchState from 'react-switch-state'

const { value, setValue, switchOn, switchOff, switchOnOff } = useSwitchState()
```

## API

### Return Type

#### value

type `boolean`

This is the value of the state

#### setValue

type `(value: boolean) => void`

This function is used to change the state value

#### switchOn

type `() => void`

This is used for changing the state value to `true`

#### switchOff

type `() => void`

This is used for changing the state value to `false`

#### switchOnOff

type `() => void`

This is used for toggling the state value from `true` to `false` and vice versa

### Parameters

#### default value

type `boolean` or `undefined`

This is the default value that will be used for the state value.