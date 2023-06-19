export default function PrimaryHeader({ className = "", children, onClick }) {
  return (
    <h2 onClick={onClick} className={className}>
      {children}
    </h2>
  );
}
