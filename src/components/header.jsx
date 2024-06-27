//import react and hook
import React, { useEffect, useState } from "react";

//import component react bootstrap
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Modal
} from 'react-bootstrap';

//import react router dom
import { Link , useNavigate} from "react-router-dom";

//import base API URL
import Api from "../../api";

//import js cookie
// import Cookies from "js-cookie";


function Header() {

    //state categories
    const [categories, setCategories] = useState([]);

    //state user logged in
    const [user, setUser] = useState({});

    //modal search
    const [modal, setModal] = useState(false);

    //state keyword
    const [keyword, setKeyword] = useState("");

    //navigate
    const navigate = useNavigate();

    //token
    const token = Cookies.get("token");

    //function "FetchDataCategories"
    const fetchCategories= async () => {
        //fetching Rest Api "categories"
        await Api.get('/api/web/categories')
        .then ((response) => {

            //set data to state
            setCategories(response.data.data);
        });
    }

    //function searchHandler
    const searchHandler = () => {
        //redirect with params "keyword"
        navigate(`/search?q=${keyword}`);

        //set state modal
        setModal(false);
    }

    //function fetchDataUser
    const fetchDataUser = async () => {
        //fetching rest api user
        await Api.get('/api/admin/user', {
            headers: {
                //header bearer + token
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
            //set data to state
            setUser(response.data);
        });
        
    }

    //hook
    useEffect(() => {
        //call function "FetchDataCategories"
        fetchCategories();

        //if token already exists
        if(token) {
            //call function fetchdatauser
            fetchDataUser();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" className="navbar-custom shadow-sm " fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold text-black "><i className="fa fa-map-marked-alt"></i> TRAVEL INDPIK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="cate me-auto">
                        <NavDropdown variant="success" title={<span><i className="fa fa-list-ul"></i> KATEGORI</span> } id="collasible-nav-dropdown" className="fw-bold text-white">
                        {
                            categories.map((category) => (
                                <NavDropdown.Item as={Link} to={`/category/${category.slug}`} key={category.id}><img src={category.image} style={{ width:"35px"}} alt=""/> {category.name.toUpperCase()}</NavDropdown.Item>
                            ))
                        }
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/posts/direction">LIHAT LAINNYA <i className="fa fa-long-arrow-alt-right"></i></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/places" className="fw-bold text-white"><i className="fa fa-globe-asia"></i> TEMPAT</Nav.Link>
                        <Nav.Link as={Link} to="/maps" className="fw-bold text-white"><i className="fa fa-map"></i> PETA</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link  onClick={() => setModal(true)}className="fw-bold me-4 text-white"><i className="fa fa-search"></i> CARI</Nav.Link>
                        {token
                            ? <Link to="/admin/dashboard" className="btn btn-md btn-light text-uppercase"><i className="fa fa-user-circle"></i> {user.name}</Link>
                            : <Link to="/admin/login" className="btn btn-md btn-light"><i className="fa fa-lock"></i> LOGIN</Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal
                size="lg"
                show={modal}
                onHide={() => setModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    <i className="fa fa-search"></i> SEARCH
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && searchHandler()} placeholder="find your destination here..." />
                        <button onClick={searchHandler} type="submit" className="btn btn-md btn-success"><i className="fa fa-search"></i> SEARCH</button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}
        
export default Header;