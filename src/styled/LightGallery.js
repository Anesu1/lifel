import React, { Component } from 'react'


const school = [
    './imgs/uniforms/school1.jpeg',
    './imgs/uniforms/school2.jpeg',
    './imgs/uniforms/school3.jpeg',
    './imgs/uniforms/school4.jpg',
    './imgs/uniforms/school5.jpeg',
    './imgs/uniforms/school6.jpg',
    './imgs/uniforms/school7.jpeg',
    './imgs/uniforms/school8.jpeg',
    './imgs/uniforms/school9.jpeg'
]

class LightGallery extends Component {

    render() {
        return (
            
                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 0 })}}
                                    >
                                        View
                                    </a>
                                </Link>
            
        )
    }
}

export default LightGallery