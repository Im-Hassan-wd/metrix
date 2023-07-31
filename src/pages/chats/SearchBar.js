import "./Chat.css";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <form className="seachbar-input-div">
        <i className="fi fi-rr-search"></i>

        <input type="text" required placeholder="Search" />
      </form>
    </div>
  );
}
