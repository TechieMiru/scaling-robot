import React from 'react'

function TextInputWithFocusButton() {
  const inputEl = React.useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button className="btn-cus" onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton;