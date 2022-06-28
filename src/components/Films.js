import React, { useState, useEffect } from "react";
import FilmList from "./FilmList";
import UpdateForm from "./UpdateForm";
import DialogModal from "./ui/Dialog";
import { SearchIcon } from "@heroicons/react/solid";
const Films = (props) => {
  const [filteredData, setFilteredData] = useState(props.data);
  const [searchKey, setSearchKey] = useState("");

  const [selected, setSelected] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(selected);
  }, [selected]);

  useEffect(() => {
    setTableData(props.data);
  }, [props.data]);

  // arama alanina girilen keyword'e gore filmleri filtreler
  const handleChange = (value) => {
    setSearchKey(value);
    if (value.length > 0) {
      const searchResult = props.data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setFilteredData(searchResult);
    } else {
      setFilteredData(props.data);
    }
  };
  const handleOpenUpdateDialog = (item) => {
    setSelected(item);
    setIsDialogOpen(true);
  };

  return (
    <div className="row-span-2 lg:row-span-3 flex h-full max-h-full overflow-hidden">
      <div className="card relative h-full max-h-full overflow-hidden w-full">
        <div className="flex items-center justify-between shrink-0 h-12 lg:h-14 w-full px-4 lg:px-6 rounded-t-lg">
          <h2 className="text-sm lg:text-lg font-medium text-gray-800">
            <strong>FİLMLER</strong>
          </h2>

          <div className="group mt-1 relative flex items-right">
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Film Ara"
              className="ring-0 focus:ring-0 border-gray-400/20 focus:border-gray-400/80 bg-white/30 focus:bg-white/30 block w-24 pr-12 pl-1.5 py-1 text-xs lg:text-sm rounded-lg text-gray-500 focus:text-gray-700 focus:placeholder:text-gray-700 placeholder:text-gray-400"
              value={searchKey}
              onChange={(e) => handleChange(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex py-1 pr-1.5">
              <SearchIcon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600/30 group-focus-within:text-gray-600/50" />
            </div>
          </div>
        </div>
        <div className="absolute top-12 lg:top-14 left-0 right-0 bottom-4 lg:bottom-6 overflow-y-auto overflow-x-auto w-full">
          <FilmList
            data={filteredData}
            setData={setFilteredData}
            selected={props.selected}
            setSelected={props.setSelected}
          />
        </div>
      </div>

      <tbody className="divide-y divide-gray-200">
            {tableData &&
              tableData.length > 0 &&
              tableData.map((item, index) => (
                <tr className="odd:bg-gray-100 even:bg-gray-50" key={item.id}>
                  <td className="px-3 py-4 text-center text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="w-full max-w-0 px-3 py-4 text-sm font-medium text-gray-800 sm:w-auto sm:max-w-none">
                    {item.isim}
                  </td>
                  <td className="flex justify-center space-x-3 px-3 py-4 text-sm">
                    <button
                      type="button"
                      onClick={() => handleOpenUpdateDialog(item)}
                      className="lg:border lg:border-green-600 text-green-500 lg:text-green-600 lg:rounded-lg lg:px-2 lg:py-1 bg-transparent"
                    >
                      <span className="lg:block">Detail</span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>

      <DialogModal
        title="Film Details"
        text={<UpdateForm data={formData} setData={setFormData} />}
        buttons={[
          {
            label: "Detail",
            color: "green",
          },
        ]}
        icon={{ color: "green" }}
        show={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />

      
    </div>
  );
};

export default Films;
