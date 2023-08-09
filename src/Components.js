import { Link } from "react-router-dom";
import { Typography } from "@rippling/ui";
import { Fonts } from "@rippling/ui/Constants";
import { Button } from "@rippling/ui";
import Icon from "@rippling/ui/Icon";

// count box component
export function CountBox({ num }) {
  return <div className="CountBox">{num}</div>;
}

// component to display image of a product
export function ProductImg({
  index,
  linkto,
  img,
  clickHandler,
  dblClickHandler,
}) {
  return (
    <div
      index={index}
      className="ProductImg"
      onClick={clickHandler}
      onContextMenu={dblClickHandler}
    >
      <Link to={linkto}>
        <img src={img} style={{ height: "400px", width: "auto" }} alt=""></img>
      </Link>
      {/* <Link to={linkto}></Link> */}
    </div>
  );
}

export function ProductDetails({ index, product }) {
  return (
    <div className="ProductDetails">
      <Typography.H3>{product.title}</Typography.H3>
      <Typography.H3 fontFamily={Fonts.RIPPLING_FONT_PROMO}>
        {`$${product.price}`}
      </Typography.H3>
    </div>
  );
}
// component to display details of a product
export function ProductDetailsAndSelection({
  index,
  product,
  count,
  addButtonHandler,
  subtractButtonHandler,
  children,
}) {
  return (
    <div className="ProductDetailsAndSelection">
      <ProductDetails index={index} product={product} />
      <SelectPanel
        index={index}
        count={count}
        addButtonHandler={addButtonHandler}
        subtractButtonHandler={subtractButtonHandler}
      />
      {children}
    </div>
  );
}

// component to display the product selection/removal option
export function SelectPanel({
  index,
  count,
  addButtonHandler,
  subtractButtonHandler,
}) {
  return (
    <div className="SelectPanel">
      <Button
        onClick={subtractButtonHandler}
        icon={Icon.TYPES.REMOVE_CIRCLE_OUTLINE}
      ></Button>
      <CountBox num={count} />
      <Button
        onClick={addButtonHandler}
        icon={Icon.TYPES.ADD_CIRCLE_OUTLINE}
      ></Button>
    </div>
  );
}

// dashboard on the top of every page
export function DashBoard({ children }) {
  return <div className="Dashboard">{children}</div>;
}
