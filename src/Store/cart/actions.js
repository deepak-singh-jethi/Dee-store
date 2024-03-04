//fetching cart , adding and removing item from cart
//fetching category
import CategoryActions from "./category";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(
      CategoryActions.setStatus({
        status: "loading",
        message: "Fetching categories",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (!response.ok) {
        throw new Error("Error in Fetching Data");
      }
      const data = await response.json();
      dispatch(
        CategoryActions.setStatus({
          status: "Sucess",
          message: "Fetched categories",
        })
      );
      return data;
    };

    try {
      const category = await fetchData();
      dispatch(CategoryActions.setCategory(category));
    } catch (err) {
      console.log(err);
      dispatch(
        CategoryActions.setStatus({
          status: "error",
          message: err.message,
        })
      );
      console.log(err.message);
    }
  };
};
