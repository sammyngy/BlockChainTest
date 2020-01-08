import React from "react";

import ShowList from "./ShowList";

const ListShoes = ({ data }) => {
  return (
    <>
      {data.map((info, index) => (
        <ShowList
          key={index}
          id={info.id}
          img={info.img}
          name={info.brand
            .toLowerCase()
            .split(" ")
            .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
            .join(" ")}
        />
      ))}
    </>
  );
};

export default ListShoes;
