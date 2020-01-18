import React from "react";


// `/search`: This page allows you to search the [Dog Ceo API](https://dog.ceo/dog-api/) 
//for all dogs by breed. After a search is made, a list of all of the results appears underneath.

function Search() {
    return (
        <div>
            <h1>Search</h1>
            <div class="active-pink-4 mb-4">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </div>
        </div>
            );
          }
          
export default Search;