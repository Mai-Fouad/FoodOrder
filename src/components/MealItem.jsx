import { useContext } from "react";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="meal-item" key={meal.id}>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
