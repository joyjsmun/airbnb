export default function Card() {
    return (
        <div className="card">
                <img className="card--img" src="../images/katie-zaferes.png" />
                <div>
                    <img className="star" src="../images/star.png" />
                    <span>5.0</span>
                    <span className="gray">(6)</span>
                    <span className="gray"></span>
                    <span className="gray">USA</span>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className="bold">From $136</span><span>/ person</span></p>
                </div>
        </div>
    )
}