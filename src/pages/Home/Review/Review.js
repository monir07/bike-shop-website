import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Review.css'

const Review = () => {
    const img1 = 'https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png';
    const img2 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623136169302.jpg';
    const img3 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1613735826005.jpg';
    const img4 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1608799588302.jpg';
    const img5 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1621166700244.png';
    const img6 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1609279018177.jpg';
    const img7 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1607670026054.jpg';
    const img8 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1608470713768.jpg';
    return (
        <div className="container">
            <h2 className="my-5 display-5 text-center text-uppercase">product review</h2>
            <OwlCarousel className='owl-theme' nav>
                <div className='item'>
                    <div className="card align-items-center border-0">
                        <img src={img1} style={{ width: "50%", borderRadius: "50%" }} className="card-img-top img-fluid " alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Tajbiul Islam Moral</p>
                        </div>
                        <div>
                            <span class="fa fa-star text-warning"></span>
                            <span class="fa fa-star text-warning"></span>
                            <span class="fa fa-star text-warning" ></span>
                            <span class="fa fa-star text-warning" ></span>
                            <span class="fa fa-star-o text-secondary" ></span>
                        </div>
                        <div>
                            <p className="text-secondary px-3">I think that he was a very good guide and I really enjoyed the whom your. He made the guests laugh and learning about the city at the same time. A very good experience I can only talk good about.</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card align-items-center border-0">
                        <img src={img2} style={{ width: "50%", borderRadius: "50%" }} className="card-img-top img-fluid " alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Tajbiul Islam Moral</p>
                        </div>
                        <div>
                            <span class="fa fa-star text-warning"></span>
                            <span class="fa fa-star text-warning"></span>
                            <span class="fa fa-star text-warning" ></span>
                            <span class="fa fa-star text-warning" ></span>
                            <span class="fa fa-star text-warning" ></span>
                        </div>
                        <div>
                            <p className="text-secondary px-3">I think that he was a very good guide and I really enjoyed the whom your. He made the guests laugh and learning about the city at the same time. A very good experience I can only talk good about.</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card align-items-center border-0">
                        <img src={img3} style={{ width: "50%", borderRadius: "50%" }} className="card-img-top img-fluid " alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Tajbiul Islam Moral</p>
                        </div>
                        <div>
                            <span class="fa fa-star text-warning"></span>
                            <span class="fa fa-star-o text-secondary"></span>
                            <span class="fa fa-star-o text-secondary" ></span>
                            <span class="fa fa-star-o text-secondary" ></span>
                            <span class="fa fa-star-o text-secondary" ></span>
                        </div>
                        <div>
                            <p className="text-secondary px-3">I think that he was a very good guide and I really enjoyed the whom your. He made the guests laugh and learning about the city at the same time. A very good experience I can only talk good about.</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card align-items-center border-0">
                        <img src={img3} style={{ width: "50%", borderRadius: "50%" }} className="card-img-top img-fluid " alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Tajbiul Islam Moral</p>
                        </div>
                        <div>
                            <span class="fa fa-star text-warning"></span>
                            <span class="fa fa-star-o text-secondary"></span>
                            <span class="fa fa-star-o text-secondary" ></span>
                            <span class="fa fa-star-o text-secondary" ></span>
                            <span class="fa fa-star-o text-secondary" ></span>
                        </div>
                        <div>
                            <p className="text-secondary px-3">I think that he was a very good guide and I really enjoyed the whom your. He made the guests laugh and learning about the city at the same time. A very good experience I can only talk good about.</p>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Review;