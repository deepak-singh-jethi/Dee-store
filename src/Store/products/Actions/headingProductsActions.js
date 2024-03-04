import headingProdcutAction from "../HeadingProdcuts";

export const fetchHeadingProducts = () => {
  return async (dispatch) => {
    dispatch(
      headingProdcutAction.setStatus({
        status: "loading",
        message: "Fetching Data",
      })
    );
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");

      if (!response.ok) {
        throw new Error("Error in Fetching Data");
      }
      const data = await response.json();
      dispatch(
        headingProdcutAction.setStatus({
          status: "Sucess",
          message: "Fetched categories",
        })
      );
      return data;
    };

    try {
      const headingProdcts = await fetchData();
      dispatch(headingProdcutAction.getProducts(headingProdcts));
    } catch (err) {
      console.log(err);
      dispatch(
        headingProdcutAction.setStatus({
          status: "error",
          message: err.message,
        })
      );
    }
  };
};
