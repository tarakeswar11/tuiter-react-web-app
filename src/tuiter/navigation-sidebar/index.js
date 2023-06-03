import React from "react";
import { Link, useLocation } from "react-router-dom";





const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 const icons = ["bi bi-house-door-fill", "bi bi-hash", "bi bi-bell", "bi bi-envelope", "bi bi-bookmark", "bi bi-card-list", "bi bi-person", "bi bi-three-dots"]
 return (
   <div className="list-group">
     {links.map((link, i) => 
     
        
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
          
          <i className={`${icons[i]}`}>&nbsp;&nbsp;</i>
           {link}
           
         </Link>
     )}
     <p className="text-white fs-6">{ignore}</p>
     <p className="text-white fs-6">{tuiter}</p>

   </div>
 );
};
export default NavigationSidebar;