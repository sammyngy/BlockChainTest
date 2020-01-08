import React from "react";

import ShowList from "../../List/ShowList";

const SingleShoe = ({ data2 }) => {
  return (
    <>
     
        <ShowList
          
          id={data2.id}
          img={data2.img}
          name={data2.brand}
        />
      
    </>
  );
};

export default SingleShoe;
