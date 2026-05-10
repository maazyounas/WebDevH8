import axios from "axios";
import { useState } from "react";

const Api = () => {
  const [UserData, setUserData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10",
    );

    setUserData(response.data);
    console.log(response.data);
  };

  let Display = "No Data Found";

  if (UserData.length > 0) {
    Display = UserData.map((elem) => (
      <div key={elem.id} className="border-2 border-gray-300 p-4 m-4 rounded">
        <h2 className="text-xl font-bold mb-2">{elem.author}</h2>
        <img
          src={elem.download_url}
          alt={elem.author}
          className="w-full h-auto rounded"
        />
      </div>
    ));
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white active:scale-90 m-20 font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        Get Data
      </button>

      <div>{Display}</div>
    </div>
  );
};

export default Api;
