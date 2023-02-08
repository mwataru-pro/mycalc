export function calculate(button: string, state: State) {
  // どの状態の時にどのボタンを押すと、次はどの状態になるか
  // 数値かどうか
  if (isNumberButton(button)) {
    return handleNumberButton(button, state)
  }
  // オペレーターかどうか
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state)
  }
  // .かどうか
  if (isDottoButton(button)) {

  }
  // 削除ボタンかどうか
  if (isDeleteButton(button)) {

  }
  // ACかどうか
  if (isAllCleartButton(button)) {

  }
  // ＝ かどうか
  if (isFinishedCalculateButton(button)) {

  }
  return state;
}

export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

function isNumberButton(button: string) {
  return (
    button === "0" ||
    button === "1" ||
    button === "2" ||
    button === "3" ||
    button === "4" ||
    button === "5" ||
    button === "6" ||
    button === "7" ||
    button === "8" ||
    button === "9"
  )
}
function handleNumberButton(button: string, state: State) {
  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    }
  }
  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false
  }
}
function isOperatorButton(button: string) {
  return button === "+" || button === "-";
}

function handleOperatorButton(button: string, state: State) {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true
    }
  }
  const nextValue = operate(state)
  return {
    current: '${nextValue}',
    operand: nextValue,
    operator: button,
    isNextClear: true
  }
}
