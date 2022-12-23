export default function logger(reducer) {
  return (prevState, actions, ...args) => {
    console.group(actions);
    console.log("Previos State: ", prevState);
    console.log("Args: ", ...args);
    const nextState = reducer(prevState, actions, ...args);
    console.log("Next State: ", nextState);
    console.groupEnd();
    return nextState;
  };
}
