import React, { useEffect, useState } from "react";
import DialogModal from "./ui/Dialog";
import { PencilAltIcon } from "@heroicons/react/outline";
import UpdateForm from "./UpdateForm";

const StocksTable = (props) => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // rezervasyonlarda değişiklik oldukça tabloyu günceller
  useEffect(() => {
    setTableData(props.data);
  }, [props.data]);

  // seçili rezervasyon değiştikçe rezervasyon güncelleme formunu seçilen rezervasyonun bilgileriyle günceller.
  useEffect(() => {
    setFormData(selected);
  }, [selected]);

  // dialog componentini açar ve içindeki seçili rezervasyon formunu günceller
  const handleOpenUpdateDialog = (item) => {
    setSelected(item);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="absolute top-1 left-6 right-4 bottom-1 lg:bottom-1 overflow-y-auto drop-shadow-md lg:drop-shadow-lg rounded-lg bg-white">
        <table className="w-full divide-y divide-gray-300">
          <thead className="bg-slate-200">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-800"
              >
                
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Film
              </th>
              </tr>
          </thead>
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
                      <PencilAltIcon className="h-5 w-5 lg:hidden" />{" "}
                      <span className="hidden lg:block">Detail</span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <DialogModal
        title="Film Details"
        text={<UpdateForm data={formData} setData={setFormData} />}
        buttons={[
          {
            label: "Detail",
            color: "green",
          },
        ]}
        icon={{ component: PencilAltIcon, color: "green" }}
        show={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default StocksTable;
