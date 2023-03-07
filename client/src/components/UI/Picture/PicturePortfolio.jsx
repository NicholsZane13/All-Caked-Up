import PicturePortfolioItem from "./PicturePortfolioItem"
import cake from "../../../assets/homePortfolio/cake.jpg"
import cake1 from "../../../assets/homePortfolio/cake1.jpg"
import cake2 from "../../../assets/homePortfolio/cake2.jpg"
import cake3 from "../../../assets/homePortfolio/cake3.jpg"
import cake4 from "../../../assets/homePortfolio/cake4.jpg"
import cake5 from "../../../assets/homePortfolio/cake5.jpg"
import cookies from "../../../assets/homePortfolio/cookies.jpg"
import cookies1 from "../../../assets/homePortfolio/cookies1.jpg"
import cupcakes from "../../../assets/homePortfolio/cupcakes.jpg"


const imgUrls = [
  cake, cake1, cake2, cake4, cake5, cupcakes, cookies, cake3, cookies1, 
]


function PicturePortfolio() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
      {imgUrls.map((item, index) => (
            <PicturePortfolioItem 
              imgUrl={item}
              key={index}
            />
      ))}
    </div>
  );
}

export default PicturePortfolio;