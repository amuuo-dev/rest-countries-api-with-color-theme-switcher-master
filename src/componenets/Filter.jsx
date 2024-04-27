import { FaSearch } from "react-icons/fa";
const Filter = () => {
  return (
    <section className="filter">
      <form className="form-control">
        <FaSearch />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
        />
      </form>
      <div className="filter-region">
        <select name="select" id="select" className="select">
          <option value="" disabled selected hidden>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
