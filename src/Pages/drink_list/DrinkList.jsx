import {
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function DrinkList() {
  const [search] = useSearchParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const nav = useNavigate();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
        params: { c: search.get('c') }
      });
      setData(response.data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  if (load) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (err) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-xl font-semibold">
        {err}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        {search.get('c')} Cocktails
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data?.drinks?.map((drink) => (
          <Card
            key={drink.idDrink}
            onClick={() => nav(`/drink/${drink.idDrink}`)}
            className="p-4 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center text-center">
              <Avatar
                variant="rounded"
                size="xxl"
                alt={drink.strDrink}
                src={drink.strDrinkThumb}
                className="mb-4 shadow-md"
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-semibold"
              >
                {drink.strDrink}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
