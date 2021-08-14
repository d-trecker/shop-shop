import React, { useEffect } from 'react';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';

function CategoryMenu() {
  //calls useStoreContext Hook to retrieve current state from global state object + dispatch to update state
  const [state, dispatch] = useStoreContext();
  //only need categories array out of global state, so it is destructured out of state to pass through JSX
  const { categories } = state;

  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  const handleClick = id => {
    dispatch({ 
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    }
  }, [categoryData, dispatch]);

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
