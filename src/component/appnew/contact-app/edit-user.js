import React,{Fragment,useState,useEffect} from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb'
import {useParams,useHistory} from 'react-router-dom'
import userDemoPic from '../../../assets/images/user/user.png';
import {useForm} from 'react-hook-form';
import { editUser } from '../../../redux/service/contact.service';
import firebase from '../../../data/base';
import {Container,Card,CardBody,Form,FormGroup,Input,Label,Button} from 'reactstrap'
const Edituser = (props) =>  {
    let params = useParams();
    const history = useHistory();
    const [url, setUrl] = useState();
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const db = firebase.firestore();
    const [data, setData] = useState();
    const [userId, setUserId] = useState();

    useEffect(() => {
        const id = params.id;
        setUserId(id);
        const isSubscribed = db.collection("contactApp").doc(id)
                .onSnapshot(function(doc) {
                    const user = doc.data();
                    setData(user);
                    setUrl(user.avatar)
                });
        return () => isSubscribed();
         // eslint-disable-next-line
    },[]);

    const onSubmit = data => {
        if (data !== '') {
            editUser(data, url ,userId);
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
        data?
        <Fragment>
        <Breadcrumb parent="Apps / Contact" title="Edit Contact"/>
        <Container fluid={true}>
                <div>
                    <div className="authentication-box contact-profile-form">
                        <Card className="mt-4">
                            <CardBody>
                                <div className="text-center user-profile">
                                    <div className="hovercard">
                                        <div className="contact-profile">
                                            <img className="rounded-circle img-100" src={url ? url : userDemoPic} alt="" />
                                            <div className="icon-wrapper">
                                                <i className="icofont icofont-pencil-alt-5">
                                                    <Input className="upload" type="file" onChange={(e) => readUrl(e)} />
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                                    <FormGroup>
                                        <Label className="col-form-label pt-0">Name</Label>
                                        <Input className="btn-pill" type="text" name="name" defaultValue={data.name} innerRef={register({ required: true })} />
                                        <span>{errors.name && 'First name is required'}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="col-form-label">Surname</Label>
                                        <Input className="btn-pill" type="text" name="surname" defaultValue={data.surname} innerRef={register({ required: true })} />
                                        <span>{errors.surname && 'Last name is required'}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="col-form-label">Mobile</Label>
                                        <Input className="btn-pill" type="number" name="mobile" defaultValue={data.mobile} innerRef={register({ pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                                        <span>{errors.mobile && 'Please enter number max 9 digit'}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="col-form-label">Age</Label>
                                        <Input className="btn-pill" type="number" name="age" defaultValue={data.age} innerRef={register({ required: true, pattern: /\d+/, min: 18, max: 70 })} />
                                        <span>{errors.age && 'Please enter age between 18 to 70 year.'}</span>
                                    </FormGroup>
                                    <FormGroup className="form-row mt-3 mb-0">
                                        <Button color="primary mr-2" type="submit"> Submit
                                        </Button>
                                        <Button color="primary" type="Button" data-original-title="btn btn-info-gradien" title="" onClick={renderContact}>
                                            Cancel
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>    
        </Fragment>
    :''
    );
}

export default Edituser;