import PicturePortfolioItem from "./PicturePortfolioItem"

const imgUrls = [
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
   "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg", 
   "https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg" ]


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