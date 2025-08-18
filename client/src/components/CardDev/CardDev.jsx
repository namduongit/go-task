import './CardDev.css';

export default function CardDev({ name, type, desc, icon, url, color }) {
    return (
        <div className="card-dev col col-lg-3 col-sm-4 col-xs-6 col-12">
            <div className="card-inner" style={{ borderTop: `4px solid ${color}` }}>
                <div className="card-image">
                    <img src={icon} alt={name} />
                </div>
                <div className="card-detail">
                    <h5 style={{ color }}>{name}</h5>
                    <p className="type">{type}</p>
                    <p className="desc">{desc}</p>
                </div>
                <div className="card-button">
                    <a href={url} target="_blank" rel="noreferrer">
                        Read more →
                    </a>
                </div>
            </div>
        </div>
    );
}
