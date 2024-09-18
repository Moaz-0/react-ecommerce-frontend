import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const location =useLocation();
  const handleInputChange = (e) => {


    if (location.pathname === "/all-products") {
      const search_elements = document.querySelectorAll(
        ".products-cards .card-body .card-title"
      );
    
      search_elements.forEach((element) => {
        const text = element.textContent;
        const searchText = e.target.value;
        const regex = new RegExp(`(${searchText})`, "gi");
    
        if (text.includes(searchText, 0)||text.toLowerCase().includes(searchText, 0)) {
          element.parentElement.parentElement.style.display = "inline-block";
    
          // Highlight matching letters by wrapping in <span>
          const highlightedText = text.replace(
            regex,
            (match) => `<span class="highlight">${match}</span>`
          );
          element.innerHTML = highlightedText;
        } else if (searchText === "") {
          element.parentElement.parentElement.style.display = "inline-block";
          element.innerHTML = text; // Reset the title if search is cleared
        } else {
          element.parentElement.parentElement.style.display = "none";
        }
      });
    }else if (location.pathname === "/new-arrival") {
      const search_elements = document.querySelectorAll(
        ".products-cards .card-body .card-title"
      );
    
      search_elements.forEach((element) => {
        const text = element.textContent;
        const searchText = e.target.value;
        const regex = new RegExp(`(${searchText})`, "gi");
    
        if (text.includes(searchText, 0)||text.toLowerCase().includes(searchText, 0)) {
          element.parentElement.parentElement.style.display = "inline-block";
    
          // Highlight matching letters by wrapping in <span>
          const highlightedText = text.replace(
            regex,
            (match) => `<span class="highlight">${match}</span>`
          );
          element.innerHTML = highlightedText;
        } else if (searchText === "") {
          element.parentElement.parentElement.style.display = "inline-block";
          element.innerHTML = text; // Reset the title if search is cleared
        } else {
          element.parentElement.parentElement.style.display = "none";
        }
      });
    }




    setSearchTerm(e.target.value);
    if(location.pathname==="/under-delivery"){////////////////////////////////
      const search_elements = document.querySelectorAll(
        ".under-delivery-orders .orders table tbody tr .productid"
      );
      search_elements.forEach((element) => {
        if (element.textContent.includes(e.target.value, 0)) {
          element.parentElement.style.display = "flex";
        }else if(e.target.value===''){
          element.parentElement.style.display = "flex";
        } else {
          element.parentElement.style.display = "none";
        }
      });
    }/////////////////////////////////////////////////////////
    else if(location.pathname==="/users-accounts"){
      const search_elements = document.querySelectorAll(
        ".users-accounts .accounts table tr .userid"
      );
      search_elements.forEach((element) => {
        if (element.textContent.includes(e.target.value, 0)) {
          element.parentElement.style.display = "flex";
        }else if(e.target.value===''){
          element.parentElement.style.display = "flex";
        } else {
          element.parentElement.style.display = "none";
        }
      });
    }

    else if(location.pathname==="/products"){
      const search_elements = document.querySelectorAll(
        ".Products-table .products table tr .userid"
      );
      search_elements.forEach((element) => {
        if (element.textContent.includes(e.target.value, 0)) {
          element.parentElement.style.display = "flex";
        }else if(e.target.value===''){
          element.parentElement.style.display = "flex";
        } else {
          element.parentElement.style.display = "none";
        }
      });
    }
  };


  const handleClear = (e) => {
    setSearchTerm("");

    handleInputChange(e);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="main-search-input"
        placeholder={props.path==="main"?"Search.....":"Search by id....."}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <button className="clear-button" onClick={(e)=>{handleClear(e)}}>
          &times;
        </button>
      )}
    </div>
  );
}

export default SearchInput;
