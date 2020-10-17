import React, { Fragment,useState } from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb'
import {useHistory} from 'react-router-dom'
import user from '../../../assets/images/user/user.png';
import {useForm} from 'react-hook-form'
import { createUser } from '../../../redux/service/contact.service'
import {Container,Card,CardBody,Form,FormGroup,Input,Label,Button} from 'reactstrap'
const Newuser = (props) => {
    const history = useHistory();
    const [url, setUrl] = useState();
    const { register, handleSubmit, errors } = useForm(); // initialise the hook

    const onSubmit = data => {
        if (data !== '') {
            createUser(data, url);
            history.push('/appnew/contact-app');
        } else {
            errors.showMessages();
        }
    };

    const renderContact = () => {
        history.push('/appnew/contact-app');
    }

    const readUrl = (event) => {
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;

        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            setUrl(reader.result)
        }
    }
    return (
        <Fragment>
        <Breadcrumb parent="Apps / User" title="New Contact"/>
        <Container fluid={true}>
                <div>
                    <div className="authentication-box contact-profile-form">
                        <Card className="mt-4">
                            <CardBody>
                                <div className="text-center user-profile">
                                    <div className="hovercard">
                                        <div className="contact-profile">
                                            <img className="rounded-circle img-100" src={url ? url : user} alt="" />
                                            <div className="icon-wrapper">
                                                <i className="icofont icofont-pencil-alt-5">
                                                    <Input className="upload" type="file" onChange={(e) => readUrl(e)} />
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Form className="theme-form needs-validation" onSubmit={handleSubmit(onSubmit)}>
                                    <FormGroup className="form-row">
                                        <Label className="col-form-label pt-0">Name</Label>
                                        <Input className="btn-pill" type="text" name="name" innerRef={register({ required: true })} />
                                        <span>{errors.name && 'First name is required'}</span>
                                    </FormGroup>
                                    <FormGroup className="form-row">
                                        <Label className="col-form-label">Surname</Label>
                                        <Input className="btn-pill" type="text" name="surname" innerRef={register({ required: true })} />
                                        <span>{errors.surname && 'Last name is required'}</span>
                                    </FormGroup>
                                    <FormGroup className="form-row">
                                        <Label className="col-form-label">Mobile</Label>
                                        <Input className="btn-pill" type="number" name="mobile" innerRef={register({ pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                                        <span>{errors.mobile && 'Please enter number max 9 digit'}</span>
                                    </FormGroup>
                                    <FormGroup className="form-row">
                                        <Label className="col-form-label">Age</Label>
                                        <Input className="btn-pill" type="number" name="age" innerRef={register({ required: true, pattern: /\d+/, min: 18, max: 70 })} />
                                        <span>{errors.age && 'Please enter age between 18 to 70 year.'}</span>
                                    </FormGroup>
                                    <div className="form-group form-row mt-3 mb-0">
                                        <Button color="primary mr-2" type="submit">Submit</Button>
                                        <Button color="primary" type="Button" data-original-title="btn btn-info-gradien" title="" onClick={renderContact}>Cancel</Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>   
        </Fragment>
    );
}

export default Newuser;