import { useState } from "react";

type HomeProps = {
  username: string;
};

const Home = ({ username }: HomeProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      
      {/* Props Drilling Example */}
      <h1 className="text-4xl font-bold mb-4">
        Welcome {username}
      </h1>

      <p className="text-gray-600 mb-8">
        This data is coming from App.tsx using Props.
      </p>

      {/* useState Example */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md w-[300px]">
        
        <h2 className="text-2xl font-semibold mb-4">
          Counter App
        </h2>

        <p className="text-3xl font-bold mb-6">
          {count}
        </p>

        <div className="flex gap-4">
          
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Decrement
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;