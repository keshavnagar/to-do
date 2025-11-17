const Header = ({dateTime}) => {
    
  return (
    <header className="mt-[10rem]">
      <h1 className="text-3xl font-bold text-green-200">ToDo List</h1>
      <h2>{dateTime}</h2>
    </header>
  );
};
export default Header;
