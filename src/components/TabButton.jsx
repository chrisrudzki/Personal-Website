import '../App.css'

export default function TabButton({ children, isSelected, ...props }) {
  return (
      <button style={{textAlign: "center"}}className={isSelected ? "active " : undefined} {...props}>
        {children}
      </button>
  );
}
