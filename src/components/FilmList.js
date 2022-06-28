import React, { useEffect, useState } from "react";

const FilmList = (props) => {
  const [rezList, setRezList] = useState([]);

  useEffect(() => {
    setRezList(props.data);
  }, [props.data]);

  // tiklanan sahayı secili hale getirir
  const handleClick = (selected) => {
    props.setSelected(selected);
  };

  return (
    <div>
      <ul className=" lg:grid-cols-3 3xl:grid-cols-4 gap-4 lg:gap-6 px-1 lg:pr-1 w-full">
        {rezList &&
          rezList.length > 0 &&
          rezList.map((film) => (
            
            <li
              onClick={() => handleClick(film)}
              key={film.id}
              className={`${
                props.selected?.id === film.id
                  ? `bg-green-500`
                  : `bg-gray`
              } relative group h-12 w-full  border rounded-lg transition-all duration-100 ease-in-out bg-green-300`}
            >
              <div
              style={{
                backgroundImage: `url('${film.gorsel}')`,
              }}
              className="h-full w-full bg-center bg-cover cursor-pointer scale-90 group-hover:scale-100 transition-transform duration-200 ease-in-out"
            />
              <div className="flex justify-between items-end cursor-pointer h-20 pl-1 pb-3.5 absolute bottom-0 left-0 right-0 rounded-b-md bg-gradient-to-b from-transparent to-gray-900/70 text-gray-100">
                <strong className="text-xs justify-center">{film.isim}</strong>
              </div>
            </li>
          ))}
      </ul>
      <ul>
        

      </ul>
    </div>
  );
};

export default FilmList;
