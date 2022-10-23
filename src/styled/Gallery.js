import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Link } from 'react-scroll';


const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
]

class Gallery extends Component {
    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="gallery-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={'//placekitten.com/1500/500'} alt="gallery" />

                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 0 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={'//placekitten.com/4000/3000'} alt="gallery" />

                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 1 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={'//placekitten.com/800/1200'} alt="gallery" />

                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 2 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={'//placekitten.com/1500/1500'} alt="gallery" />

                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 3 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpenImage: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={require('../images/gallery5.jpg')} alt="gallery" />
                                
                                <Link href="#popup">
                                    <a
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 4 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={require('../images/gallery6.jpg')} alt="gallery" />
                                
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 5 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={require('../images/gallery7.jpg')} alt="gallery" />

                                <Link href="#popup">
                                    <a
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 6 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={require('../images/gallery8.jpg')} alt="gallery" />
                                
                                <Link href="#popup">
                                    <a
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 7 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-image">
                                <img src={require('../images/gallery9.jpg')} alt="gallery" />
                                
                                <Link href="#popup">
                                    <a
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 8 })}}
                                    >
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;