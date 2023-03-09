export default function PicturePortfolioItem({ imgUrl }) {
  return (
    <div>
      <img className="object-cover border w-120" src={imgUrl} alt="cake" />
    </div>
  );
}
