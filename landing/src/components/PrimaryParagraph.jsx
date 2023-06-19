export default function PrimaryParagraph({
  className = "",
  children,
  onClick,
}) {
  return (
    <p onClick={onClick} className={className}>
      {children}
    </p>
  );
}
