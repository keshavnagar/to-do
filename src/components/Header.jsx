import { useEffect } from "react";
const Header = ({ dateTime, setDateTime }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate}-${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <header className="mt-[10rem]">
      <h1 className="text-3xl font-bold text-green-200">ToDo List</h1>
      <h2>{dateTime}</h2>
    </header>
  );
};
export default Header;
