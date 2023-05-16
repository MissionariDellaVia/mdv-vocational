import React from 'react';
import '../assets/css/footer.css';

import Img1 from '../assets/img/footer-blog.jpg'
import Img2 from '../assets/img/footer-missionari.jpg'
import Img3 from '../assets/img/footer-comunita.jpg'
import Img4 from '../assets/img/footer-gospel.jpg'

export default function footer() {
    return (
        <footer className="mainfooter" role="contentinfo">
            <div className="footer-middle">
                <div className="container">
                    <div className="row mx-auto pb-4">
                        <div className="col-sm-3 hoverable">
                            <h5 className="text-center">Blog</h5>
                            <a href="https://blogdeipiccolidellavia.blogspot.com/"><img className="img-fluid" src={Img1}
                                                                                        alt="blog"></img></a>
                        </div>
                        <div className="col-sm-3 mt-2 mb-2 hoverable">
                            <h5 className="text-center">Movimento Laicale</h5>
                            <a href="http://www.cristianidistrada.net/"><img className="img-fluid" src={Img3}
                                                                             alt="comunita"></img></a>
                        </div>
                        <div className="col-sm-3 hoverable">
                            <h5 className="text-center">Missionari della Via</h5>
                            <a href="http://www.missionaridellavia.net/"><img className="img-fluid" src={Img2}
                                                                              alt="missionari"></img></a>
                        </div>
                        <div className="col-sm-3 hoverable">
                            <h5 className="text-center">Via del Vangelelo</h5>
                            <a href="https://missionaridellavia.github.io/mdv-gospel-way-app/#/"><img
                                className="img-fluid" src={Img4} alt="viadelvangelo"></img></a>
                        </div>
                    </div>
                    <div className="row mt-4 ">
                        <div className="mx-auto">
                            <ul className="list-inline social-network social-circle">
                                <li><a
                                    href="https://www.facebook.com/Missionari-e-Missionarie-della-Via-131755957239592"
                                    className="icoFacebook " title="Facebook"><i className="fa fa-facebook"></i></a>
                                </li>
                            </ul>

                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12 copy">
                            <p className="text-center">&copy; Copyright 2020 - Missionari della Via. Tutti i diritti
                                riservati.</p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
