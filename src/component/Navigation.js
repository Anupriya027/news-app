import React, {useState} from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import Searchbar from "./Searchbar";
import "./Index.css";
import "./Searchbar.css";


function Navigation(){
  const [showLinks, setShowLinks] = useState(false);
  
  return(
    <div className="Navbar">
      <div className="Lside">
        <div className="Links" id={showLinks ? "hidden" :""}>
          <a href="/">Home</a>
          <a href="/Covid">Covid</a>
          <a href="/Finance">Finance</a>
          <a href="/International">International</a>
          <a href="/Politics">Politics</a>
          <a href="/Sports">Sports</a>
          <a href="/Entertainment">Entertainment</a>
        </div>
       
      <button onClick={() => setShowLinks(!showLinks)}>
         {" "}
         <ReorderIcon/>
         </button>
        
      </div>
      <div className="Rside">
         <Searchbar/>
      </div>

    </div>
  );
}

export default Navigation;