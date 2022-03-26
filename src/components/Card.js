export default function Card({item}) {
    const openSpots = item.openSpots;
    let text;
    if(openSpots === 0){
         text = "SOLD OUT"
    }else if(openSpots > 0 && item.location === "Online"){
         text = item.location
    }
    return (
        <div className="card">
                {text ? <div className="card--sign">{text}</div> : null}
                <img className="card--img" src={`../images/${item.coverImg}`} alt="card main img" />
                <div>
                    <img className="star" src="../images/star.png" alt="star img" />
                    <span>{item.stats.rating}</span>
                    <span className="gray">({item.stats.reviewCount})</span>
                    <span className="gray"></span>
                    <span className="gray">{item.location}</span>
                    <p>{item.title}</p>
                    <p><span className="bold">From ${item.price}</span><span>/ person</span></p>
                </div>
        </div>
    )
}