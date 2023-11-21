import React, { useState } from "react";
import { members } from "../data";
const SearchFilter = () => {
  const [input, setinput] = useState("");

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Contact Keeper
          </h1>
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              className="border outline-none w-full rounded-md py-3 lg:w-2/3 px-4  text-xl mt-12"
            />
          </div>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  First Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Last Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Phone
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              {members
                .filter((item) => {
                  return input.toLowerCase() === ""
                    ? item
                    : item.first_name.toLowerCase().includes(input);
                })
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="px-4 py-3">{item.first_name}</td>
                      <td className="px-4 py-3">{item.last_name}</td>
                      <td className="px-4 py-3">{item.email}</td>
                      <td className="px-4 py-3 text-lg text-gray-900">
                        {item.phone}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
