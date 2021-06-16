import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
// import DatePicker from 'react-datepicker'
import { useSearchStore } from "../store";
import Spinner from "./Spinner";

const Searchbar = (props) => {
  //var query="";
  const [recentData, setRecentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");
  const [dateValue, setDateValue] = useState(new Date().getTime());
  const [, setSearch] = useSearchStore();

  const makeChange = (event) => {
    event.persist();
    setSearchvalue(event.target.value);
  };

  useEffect(() => {
    fetchData(searchvalue);
  }, [searchvalue]);

  async function fetchData(search = "") {
    if (search) {
      let baseURL =
        `https://webhose.io/nseFilter?token=3cb756ed-146c-4715-95cf-5040d4c58a13&size=5&q=` +
        search;

      setLoading(true);
      let api = await fetch(baseURL);
      let cdata = await api.json();

      console.log(search, baseURL);
      setLoading(false);
      setRecentData(cdata["docs"]);
    }
  }

  function submitSearch() {
    setRecentData([]);
    setDateValue(dateValue);

    setSearch({ name: searchvalue, date: dateValue });
    // setSearch(searchvalue);
  }

  return (
    <React.Fragment>
      <div className="search_bar">
        <input
          id="datepicker"
          onChange={(e) => setDateValue(new Date(e.target.value).getTime())}
          onSubmit={submitSearch}
          type="date"
          placeholder="Search date"
        />

        <input
          onChange={makeChange} //<SearchBar message
          onSubmit={submitSearch}
          value={searchvalue}
          type="text"
          placeholder="Search here....."
        />

        {/*<DatePicker
        selected = {dateValue}
        onChange={(e) => setDateValue(new Date(e.target.value).getTime())}
        onSubmit = {submitSearch}
        />*/}

        {/*<news query= {dateValue}/> */}
        <button onClick={submitSearch}>
          <SearchIcon />
        </button>
      </div>
      {recentData.length !== 0 || loading ? (
        <SearchResults data={recentData} loading={loading} />
      ) : (
        ``
      )}
    </React.Fragment>
  );
};

const SearchResults = ({ data, loading }) => {
  return (
    <React.Fragment>
      <div className="search_container">
        {loading ? <Spinner /> : ``}

        {data &&
          data.map((news) => (
            <div key={news["article"]["uuid"]} className="search_result">
              {news["article"]["title"]}
            </div>
          ))}
        <br />
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
