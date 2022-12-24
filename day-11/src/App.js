import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ACCESS_KEY } from "./config/constants";

const App = () => {
  const [imageList, setImage] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=30`
      )
      .then((response) => setImage(response.data));
  }, []); 


  const searchImage = (question) =>{
   const searchImageList = imageList.filter(image =>{
      console.log(image);
      image.alt_description = image.alt_description === null ? "react":image.alt_description 

      return image.alt_description.includes(question);
    });
    setImage(searchImageList);

  };


  return (
    <div>
      <center>
        <input
          type="text"
          style={{ height: "30px", width: "40%" }}
          placeholder="Search Image"
          onKeyUp={(e) => searchImage(e.target.value)} 
        ></input>
      </center>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {imageList.map((item) => {
          return (
            <div key={item.id} style={{ padding: "20px", textAlign: "center" }}>
              <img
                src={item.urls.regular}
                style={{ height: "250px", width: "250px", objectFit: "cover" }}
                alt={item.alt_description}
              />

              <br />
              {item.alt_description
                ? item.alt_description.substring(0, 15)
                : "react"}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
