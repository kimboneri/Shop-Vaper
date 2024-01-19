import CardCategory from "./CardCategory";
import { Link } from "react-router-dom";

import "./Category.scss";
const Category = () => {
  return (
    <div className="category">
      <h2 className="category__tittle">categorias</h2>
      <div className="category__card">
        <Link to="/vapes">
          <CardCategory
            url={
              "src/assets/category/disposable-vapes_july2023_mobile-side-nav_450x225_db2dbb04-095d-4842-b38b-e2a96107408d.png"
            }
            text={"VAPERS"}
          />
        </Link>

        <Link to="/desechables">
          {" "}
          <CardCategory
            url={
              "src/assets/category/vape-juice_july2023_mobile-side-nav_450x225_802fed7c-1a39-4742-85b8-943a004137d7.png"
            }
            text={"DESECHABLES"}
          />
        </Link>
        <Link to="liquidos">
          <CardCategory
            url={
              "src/assets/category/vape-kits_july2023_mobile-side-nav_450x225_8cce6e20-e412-4586-8ddb-4a8762cfe637.png"
            }
            text={"LIQUIDOS"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Category;
