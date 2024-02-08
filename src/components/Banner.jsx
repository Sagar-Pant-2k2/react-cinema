import bannerImage from '../../public/Images/banner-Image.webp';
import './banner.css'

export default () => {
    return (
        <div className="banner" style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="banner-box">
                <h1 className="banner-title">Title</h1>
                <h2 className="banner-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim?lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum debitis minus quod saepe sunt sint ipsa sequi totam aspernatur!</h2>
                <div className="banner-buttons">
                    <button className="banner-button">MORE</button>
                </div>
            </div>
            <div className="banner-fade"></div>
        </div>
    );
}
