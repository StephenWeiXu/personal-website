import React from "react";
import { Helmet } from "react-helmet";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";


const Family = () => {

    function get_image_paths(folder_name) {
        let total = 60;
        let image_paths = [];
        let folder_path = `./images/family/${folder_name}`;
        for(let index = 0; index < total; index++) {
            image_paths.push(`${folder_path}/${index}.jpg`);
        }
        return image_paths;
    }

    return (
        <>
            <Helmet>
                <title>Family Photos</title>
                <meta name="robots" content="noindex" />
                <meta name="description" content="Family photos and archive" />
            </Helmet>

            <div className="section">
                <Carousel className="carousel-container">
                    {
                        get_image_paths("1990s").map( path => (
                            <Carousel.Item>
                                <Row>
                                    <Col className="placeholder" sm={0} md={2} lg={4} />
                                    <Col sm={12} md={8} lg={4} className="pan">
                                        <img
                                            className="d-block w-100"
                                            src={path}
                                            alt="placeholder"
                                        />
                                    </Col>
                                    <Col className="placeholder" sm={0} md={2} lg={4} />
                                </Row>

                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </>
    );
}

export default Family;