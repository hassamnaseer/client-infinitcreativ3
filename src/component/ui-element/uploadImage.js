import React, {Fragment, useState} from 'react';
import ImageUploader from 'react-images-upload';
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
const UploadImage = () =>  {
  
        const [image,setimage] = useState({ pictures: [] })
        const onDrop = (pictureFiles) => {
            setimage({...image,pictureFiles
            });
        }

        return (
            <Fragment>
            <Breadcrumb parent="Ui Elements" title="Image-Uploads"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Multiple Image Upload</h5>
                            </CardHeader>
                            <CardBody>
                                <ImageUploader
                                    withIcon={false}
                                    withPreview={true}
                                    label=""
                                    buttonText="Upload Images"
                                    onChange={onDrop}
                                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                    maxFileSize={1048576}
                                    fileSizeError=" file size is too big"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Select Single Image Upload</h5>
                            </CardHeader>
                            <CardBody>
                                <ImageUploader
                                    withIcon={false}
                                    withPreview={true}
                                    label=""
                                    singleImage={true}
                                    buttonText="Upload Images"
                                    onChange={onDrop}
                                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                    maxFileSize={1048576}
                                    fileSizeError=" file size is too big"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </Fragment>
        );
    }

export default UploadImage;