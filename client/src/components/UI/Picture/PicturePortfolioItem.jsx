

export default function PicturePortfolioItem({ imgUrl }) {
    return (
        <div>
            <img className="object-cover w-full border w-60" src={imgUrl} alt="cake"/>
        </div>
        
    )
}
