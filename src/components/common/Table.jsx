import React, { useState } from "react";

const Table = () => {
  const tableData = [
    {
      id: 1,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 2,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 3,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 4,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 5,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 6,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 7,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 8,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 9,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 10,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 11,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 12,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 13,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 14,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 15,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 16,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 17,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
    {
      id: 18,
      headName: "Category",
      col: [
        {
          id: 1,
          name: "x",
        },
        {
          id: 2,
          name: "y",
        },
        {
          id: 3,
          name: "z",
        },
      ],
    },
  ];
  const [data, setData] = useState(tableData);

  const handleInputChange = (e, rowId, colId) => {
    const newData = [...data];
    const rowIndex = newData.findIndex((row) => row.id === rowId);
    const colIndex = newData[rowIndex].col.findIndex(
      (column) => column.id === colId
    );
    newData[rowIndex].col[colIndex].name = e.target.value;
    setData(newData);
  };
  const showData = () => {
    console.log(data);
  };

  return (
    <div className="flex justify-center flex-col gap-4">
      <div className="overflow-x-auto w-[80%] mx-auto bg-white">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="border-b-2 w-full">
              <th className="w-full px-2 py-2">OnBoarding Call</th>
            </tr>
          </thead>
          <thead>
            <tr>
              {data.map((item, index) => (
                <th
                  key={item.id}
                  className="px-4 border-r py-3 border-b border-t border-gray-400 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider"
                >
                  {item.headName}
                  {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data[0].col.map((item) => (
              <tr key={item.id}>
                {data.map((row) => (
                  <td
                    key={row.id}
                    className="px-4 py-3 border-b border-gray-200"
                  >
                    <input
                      type="text"
                      placeholder="Enter Text..."
                      value={row.col.find((col) => col.id === item.id).name}
                      onChange={(e) => handleInputChange(e, row.id, item.id)}
                      className="w-full border rounded-md px-2 py-1 placeholder:text-xs"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-auto w-[80%] justify-center items-center">
        <button
          onClick={() => showData()}
          className="bg-blue-600 rounded p-2 text-white px-6 "
        >
          Submit Data
        </button>
      </div>
    </div>
  );
};

export default Table;
