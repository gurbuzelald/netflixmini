

const SelectedItem = (props) => {
  return (
    <>
      <div className="flex items-center justify-center shrink-0 h-12 lg:h-14 w-full rounded-t-lg">
        <h2 className="text-sm lg:text-lg font-medium text-gray-800">
          <strong>SEÇİLİ REZERVASYON</strong>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4 lg:px-6">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-2 lg:gap-4">
            <div className="col-span-3 row-span-2 lg:col-span-1">
              <div className="lg:hidden lg:h-full w-full rounded-lg bg-white">
                {props.selected ? (
                  <div className="flex items-center justify-center space-x-3 lg:h-10 w-full rounded-lg bg-gray-200">
                    <div className="truncate text-sm text-gray-800">
                    <span className="text-xs">{props.selected.isim}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-16 w-full items-center justify-center space-x-1 text-xs lg:text-lg font-semibold text-gray-800">
                    <span></span>
                  </div>
                )}
              </div>
              <div className="hidden lg:block h-36 w-full rounded-lg">
                {props.selected ? (
                  <div className="relative group lg:justify-center lg:items-center h-36 w-full overflow-hidden rounded-lg bg-white">
                    <div className="h-full w-full bg-none bg-center bg-cover cursor-pointer scale-90 group-hover:scale-100 transition-transform duration-200 ease-in-out" />
                    <div className="flex justify-between items-end h-20 px-4 pb-3 absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-b from-transparent to-gray-900/70 text-gray-100">
                      <span className="text-sm text-center">{props.selected.isim}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full w-full items-center justify-center p-2 space-y-1.5 rounded-lg text-sm lg:text-lg font-semibold text-gray-800 bg-white">
                    <span className="text-center"></span>
                  </div >
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedItem;
