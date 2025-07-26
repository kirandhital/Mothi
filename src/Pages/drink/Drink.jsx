import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Drink() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
        params: { i: id }
      });
      setData(response.data.drinks ? response.data.drinks[0] : null);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (load) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (err) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">{err}</h1>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
        <h1 className="text-2xl font-semibold text-gray-600">Drink not found</h1>
        <button 
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (data[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: data[`strIngredient${i}`],
        measure: data[`strMeasure${i}`] || ""
      });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-600 hover:underline"
      >
        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"/>
        </svg>
        Back
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2">
          <img
            src={data.strDrinkThumb}
            alt={data.strDrink}
            className="object-cover w-full h-full"
          />

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">{data.strDrink}</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {data.strCategory}
              </span>
              {data.strAlcoholic && (
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  {data.strAlcoholic}
                </span>
              )}
              {data.strGlass && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {data.strGlass}
                </span>
              )}
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">Ingredients</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ingredients.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  {item.ingredient} {item.measure && `- ${item.measure}`}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-8 border-t border-gray-100 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Instructions</h2>
          <div className="text-gray-600 space-y-4">
            {data.strInstructions.split('\n').map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
