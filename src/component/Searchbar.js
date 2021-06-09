import React, {useEffect, useState} from 'react'
import SearchIcon from "@material-ui/icons/Search"
const Searchbar = () => {
    const[recentData,setRecentData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[searchvalue,setSearchvalue]=useState("");
    const[ddd,setDdd]=useState("");
    const makeChange = (event)=>{
        event.persist();
        setSearchvalue(event.target.value)
    };
    useEffect(() => {
   
        fetchData();
      }, [ddd]);
      async function fetchData(search="") {
        
        let baseURL = `https://webhose.io/nseFilter?token=1c46f8bd-3693-4b1f-871e-abcf63e8f326&ts=1620979801488`;
        setLoading(true);
        if(search){
          baseURL = `https://webhose.io/nseFilter?token=1c46f8bd-3693-4b1f-871e-abcf63e8f326&ts=1620979801488&q=`+search; 
        }
        let api = await fetch(baseURL);
        let cdata = await api.json();
        console.log(search, baseURL)
        setLoading(false);
        setRecentData(cdata['docs']);
      };
      function abc (e) {
        e.preventDefault()
       console.log(searchvalue)
       fetchData(searchvalue)
    }
    return(
            <React.Fragment>
                <div className="bar">
                <form onSubmit = {abc}><input id="aaa" onChange={makeChange}style={{height:'25px'}}  type="text"  placeholder="Search here....." />
            <button type="submit" value="submit"><SearchIcon/></button></form>
                </div>
                {loading}
                { !loading && <NewsCard data={recentData} />} 
            </React.Fragment>
    );
    

}

const NewsArticle = ({ title, text, author, url, domain, sectionTitle, date }) => {

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
            <div className="news__desc">{text }
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
export default Searchbar;