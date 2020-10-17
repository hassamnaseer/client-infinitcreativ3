import React, { Fragment,useState,useEffect } from 'react';
import Breadcrumb from '../.././common/breadcrumb/breadcrumb'
import {Link,useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {Container,Row,Col,Card,CardHeader,CardBody,Button,ListGroup,Form,FormGroup,Input,Media,Modal, ModalHeader,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import {GET_LIST,SEARCH_BY,SORT_BY,ADD_TO_CART,ADD_TO_WISHLIST} from '../../../redux/actionType'
import {Grid,List} from 'react-feather'
import Allfilters from '../../../component/application/ecommerce/filters/allfilters'
import Carousal from '../../../component/application/ecommerce/filters/Carousal'
import {getVisibleproducts} from '../../../redux/service/index'
import errorImg from '../../../assets/images/search-not-found.png';
const Product = (props) => {
    const  history = useHistory();
    const dispatch = useDispatch();
    const symbol = useSelector(content => content.data.symbol);
    const data = useSelector(content => content.data.productItems);
    // eslint-disable-next-line 
    const [layoutColumns, setLayoutColumns] = useState(3);
  
    
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [filterSidebar, setFilterSidebar] = useState(true);
    const [sidebaron, setSidebaron] = useState(true);
    const [singleProduct, setSingleProduct] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
     // eslint-disable-next-line
    const [stock, setStock] = useState('');
    
    const filters = useSelector(content => content.filters);
    const products = getVisibleproducts(data, filters)

    useEffect(() => {
      dispatch({ type: GET_LIST })
    });

    const gridLayout = () => {
      document.querySelector(".product-wrapper-grid").classList.remove("list-view");
      var elems = document.querySelector(".gridRow").childNodes;
      [].forEach.call(elems, function (el) {
        el.className = '';
        el.classList.add('col-xl-3');
        el.classList.add('col-sm-6');
        el.classList.add('xl-4')
      });
    }

    const filterSortFunc = (event) => {
      dispatch({ type: SORT_BY, sort_by: event })
    }

    const listLayout = () => {
      document.querySelector(".product-wrapper-grid").classList.add("list-view");
      var elems = document.querySelector(".gridRow").childNodes;
      [].forEach.call(elems, function (el) {
        el.className = '';
        el.classList.add('col-xl-12');
      });
    }

    const LayoutView = (layoutColumns) => {
      if (!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
        var elems = document.querySelector(".gridRow").childNodes;
        [].forEach.call(elems, function (el) {
          el.className = '';
          el.classList.add('col-xl-' + layoutColumns);
        });
      }
    }

    const onClickFilter = () => {
      if (sidebaron) {
        setSidebaron(false)
        document.querySelector(".product-wrapper").classList.add('sidebaron');
      } else {
        setSidebaron(true)
        document.querySelector(".product-wrapper").classList.remove('sidebaron');
      }
    }
    
    const addcart = (product, qty) => {
        dispatch({ type: ADD_TO_CART, payload: { product, qty } })
        history.push("/ecommerce-app/cart")
      }
    const addWishList = (product) => {
        dispatch({ type: ADD_TO_WISHLIST, payload: {product} });
        history.push("/ecommerce-app/wishlist")
    }

    const onOpenModal = (productId) => {
      setOpen(true);
      data.forEach((product, i) => {
        if (product.id === productId) {
          setSingleProduct(product)
        }
      })
    };

    const onCloseModal = () => {
      setOpen(false)
    };

    const minusQty = () => {
      if (quantity > 1) {
        setStock('InStock')
        setQuantity(quantity - 1)
      }
    }
  
    const changeQty = (e) => {
      setQuantity(parseInt(e.target.value))
    }
  
    const plusQty = () => {
      if (quantity >= 1) {
        setQuantity(quantity + 1)
      } else {
        setStock('Out of Stock !')
      }
    }

    const handleSearchKeyword = (keyword) => {
      setSearchKeyword(keyword)
      dispatch({ type: SEARCH_BY, search: keyword })
    }
    return (
        <Fragment>
        <Breadcrumb parent="Apps /Wallet" title="Wallet"/>
        <Container fluid={true} className="product-wrapper">
              <Row>
                <Col lg="12 xl-100">
                <Row>
                 <div class="card col-md-6">
                   <div class="bg-primary card-header">
                     <h5>PV Earned</h5></div><div class="card-body"><h2 class="mb-0" style={{textAlign: "center"}}>200 points</h2></div></div>
                     <div class="card col-md-6">
                        <div class="bg-primary card-header">
                     <h5>Gold Value</h5></div><div class="card-body"><h2 class="mb-0" style={{textAlign: "center"}}>200 points</h2></div></div>
                   </Row>    
                </Col>
              </Row>
              <Row>
                <div className="col-md-6" style={{textAlign: "center"}}>
                  <button class="btn-pill btn btn-primary">Redeem Cash</button>
                </div>
                <div className="col-md-6" style={{textAlign: "center"}}>
                  <button class="btn-pill btn btn-primary">Redeem Gold</button>
                </div>
              </Row>
         </Container>     
        </Fragment>
    );
}

export default Product;