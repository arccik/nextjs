export default async function handler(req, res) {
  try {
    const { search } = req.query;
    console.log(search);
    const response = await fetch(
      `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    ).then((data) => data.json());
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "fail fatching datas" });
  }
}
