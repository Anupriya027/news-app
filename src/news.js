import React, { useEffect, useState } from "react";
import Spinner from "./component/Spinner";
import "./News.css";

import { useSearchStore } from "./store";

export default function News({ query }) {
  const [recentData, setRecentData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search] = useSearchStore();

  useEffect(() => {
    let baseURL = `https://webhose.io/nseFilter?token=1c46f8bd-3693-4b1f-871e-abcf63e8f326`;

    if (search) {
      baseURL = `https://webhose.io/nseFilter?token=1c46f8bd-3693-4b1f-871e-abcf63e8f326&q=${search}`;
    }

    async function fetchData() {
      setLoading(true);

      let api = await fetch(baseURL);
      let cdata = await api.json();

      setLoading(false);
      setRecentData(cdata["docs"]);
    }

    fetchData();
  }, [search]);

  return (
    <React.Fragment>
      {search && <h1>Showing Results for {search} </h1> }
      <NewsCard data={recentData} loading={loading} />
    </React.Fragment>
  );
}

const NewsArticle = ({
  title,
  text,
  author,
  url,
  domain,
  sectionTitle,
  date,
}) => {
  return (
    <div className="term">
      <div className="news__title">
        <span>
          <b>
            <a href={url} target="_blank" rel="noreferrer">
              {title}{" "}
            </a>
          </b>
        </span>
      </div>

      <div className="news">
        <div className="news__author">
          <p>
            <i>
              Author: {author && <span>{author}</span>}
              {!author && <span>Anonymous</span>}
            </i>
          </p>
          <p className="news__source">
            <i>Source: {domain && <span>{sectionTitle}</span>}</i>
          </p>
          <p>
            <i>Published On: {date}</i>
          </p>
        </div>
        <div className="news__desc">
          {text}
          <a href={url} target="_blank" rel="noreferrer">
            Explore more
          </a>
        </div>
        <br />
      </div>
      <br />
    </div>
  );
};

const NewsCard = ({ data, loading }) => {
  return (
    <React.Fragment>
      <div className="news_card">
        <div className="newsheader">
          <div className="all__news">
            {loading ? <Spinner /> : ``}

            {data.map((news) => (
              <NewsArticle
                key={news["article"]["uuid"]}
                title={news["article"]["title"]}
                text={news["article"]["text"]}
                author={news["article"]["author"]}
                date={news["article"]["crawled"]}
                url={news["article"]["url"]}
                domain={news["site"]["domain"]}
                sectionTitle={news["site"]["section_title"]}
              />
            ))}
            <br />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
