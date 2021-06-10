import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

import { useSearchStore } from "../store";
import Spinner from "./Spinner";

const Searchbar = (props) => {
  const [recentData, setRecentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");

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
        `https://webhose.io/nseFilter?token=1c46f8bd-3693-4b1f-871e-abcf63e8f326&size=5&q=` +
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
      setSearch(searchvalue);
  }

  return (
    <React.Fragment>
      <div className="search_bar">
        <input
          onChange={makeChange}
          onSubmit={submitSearch}
          value={searchvalue}
          type="text"
          placeholder="Search here....."
        />
        <button
          onClick={submitSearch}
        >
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
