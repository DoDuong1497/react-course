function DuongButton({ type = 'button', buttonText = 'Click me', onClick }) {
  return <button type={type} onClick={onClick}>{buttonText}</button>;
}

export default DuongButton;
