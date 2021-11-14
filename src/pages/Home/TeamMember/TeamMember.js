import React from 'react';

const TeamMember = () => {
    const img1 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1625573122618.png';
    const img2 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1625419447111.png';
    const img3 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1625573160811.png';
    const img4 = 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1625573334879.png';

    return (
        <div className="container mb-5">
            <h3 className="text-center display-5 my-5">Our Team</h3>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img1} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Jhankar Mahbub</h5>
                                    <p className="card-text">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img2} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Rasel Ahmed</h5>
                                    <p className="card-text">Product Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img3} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Karina Islam</h5>
                                    <p className="card-text">Advisor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img4} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Rezaul Karim</h5>
                                    <p className="card-text">Product Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;