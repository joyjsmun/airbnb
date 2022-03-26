export default function Card({item}) {
    const openSpots = item.openSpots;
    let signText;
    if(openSpots === 0){
         signText = "SOLD OUT"
    }else if(item.location === "Online"){
         signText = item.location
    }
    return (
      
                <div className="card">
                {signText && <div className="card--sign">{signText}</div>}
                <img className="card--img" src={`../images/${item.coverImg}`} alt="card main img" />
                <div>
                    <img className="star" src="../images/star.png" alt="star img" />
                    <span>{item.stats.rating}</span>
                    <span className="gray">({item.stats.reviewCount})</span>
                    <span className="gray">•</span>
                    <span className="gray">{item.location}</span>
                    <p className="card--title">{item.title}</p>
                    <p className="card--price"><span className="bold">From ${item.price}</span><span>/ person</span></p>
                </div>
        
        </div>
    )
}