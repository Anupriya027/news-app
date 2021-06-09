import React, { useEffect, useState } from "react";
// import './../component/Jpi.css';

export default function About(props) {
  const baseURL = `https://webhose.io/nseFilter?token=1c46f8bd-3693-4b1f-871e-abcf63e8f326&q=text%3APolitics`;
  const [recentData, setRecentData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
   
      let api = await fetch(baseURL);
      let cdata = await api.json();

      setLoading(false);
      setRecentData(cdata['docs']);
    };
    fetchData();
  }, []);


  return (
    <React.Fragment>
 
      {loading}
      { !loading && <NewsCard data={recentData} />}
    </React.Fragment>
  );
}

const NewsArticle = ({ title, text, author, url, domain, sectionTitle, date }) => {
  //var x = {text}
  //var d = x.slice(1,100)

   return (
     <div className="term">
       <div className="news__title">
         <span><b>
           <a href={url} target="_blank" rel="noreferrer">
             {title} </a>
             </b>
          </span>
       </div>

        <div className="news">
         <div className="news__author">
           <p><i>
             Author: {author && <span>{author}</span>}{!author && <span>Anonymous</span>}  
           </i></p>  
           <p className="news__source">
             <i>Source: {domain && <span>{sectionTitle}</span>}
             </i>
           </p>
           <p><i>Published On: {date}</i></p>
           </div>
           <div className="news__desc">{text}
           <a href={url} target="_blank" rel="noreferrer">Explore more</a>
           </div>
           <br/>
         </div>  
        <br/>
    </div>
   )
 }


const NewsCard = ({data}) => {

    return (
      <React.Fragment>
        <div className="news_card">
          <div className="newsheader">
          <div className="all__news">
            {data.map(
            news => <NewsArticle
            key={news['article']['uuid']}
            title={news['article']['title']}
            text={news['article']['text']}
            author={news['article']['author']}
            date={news['article']['crawled']}
            url={news['article']['url']}
            domain={news['site']['domain']}
            sectionTitle={news['site']['section_title']}
            />)}
            <br/>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }

