import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryList() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const nav = useNavigate();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
      setData(response.data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load)
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );

  if (err)
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        {err}
      </div>
    );

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
        Cocktail Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.drinks?.map((category, index) => (
          <Card
            key={index}
            className="rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 bg-white border border-gray-100"
          >
            <CardBody className="text-center py-8">
              <Typography
                variant="h5"
                className="text-xl font-semibold text-gray-800 mb-4"
              >
                {category.strCategory}
              </Typography>
              <Typography className="text-gray-600 text-sm">
                Explore recipes for {category.strCategory.toLowerCase()}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 pb-6 flex justify-center">
              <Button
                onClick={() => nav(`/drink-list?c=${category.strCategory}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full shadow-md transition duration-300"
              >
                View Recipes
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
