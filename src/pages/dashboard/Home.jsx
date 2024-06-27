import React, {useState, useEffect, useRef} from "react";

import Api from "../../api";
import { Card } from "react-bootstrap";
import LayoutAdmin from "../../layouts/Admin";
import ChartPie from "../../components/chartpie";
import PlaySound from "../../components/utilites/sound";
import { Link } from "react-router-dom";
import Chart from "../../components/chartpie";
import ChartDS from "../../components/chartpieds";
import ChartPA from "../../components/chartpiePa";
import FooterDc from "../../components/footer";

function Home() {
    document.title = "Home";

    
      
          

    return(
        <React.Fragment>
          
            <Card className="chart-card  border-top-success card-dashboard">
                <Card.Body>
                    <h1>DASHBOARD DISTRIBUTION CENTER</h1>
                    <div className="row mt-6">
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <Link to="/homeinbound" className="d-flex align-items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="bg-primary py-4 px-5 mfe-3" style={{ width: "130px" }}>
                                            <i className="fas fa fa-cubes fa-4x text-white"></i>
                                        </div>
                                        <div>
                                           
                                        <div className="text-muted text-uppercase font-weight-bold small custom-storage-style">
                                                INBOUND
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <Link to="/homestorage" className="d-flex align-items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="bg-primary py-4 px-5 mfe-3" style={{ width: "130px" }}>
                                            <i className="fas fa fa-database fa-4x text-white"></i>
                                        </div>
                                        <div>
                                           
                                        <div className="text-muted text-uppercase font-weight-bold small custom-storage-style">
                                                STORAGE
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden ">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <Link to="" className="d-flex align-items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="bg-primary py-4 px-5 mfe-3" style={{ width: "130px" }}>
                                            <i className="fas fa fa-cube fa-4x text-white"></i>
                                        </div>
                                        <div>
                                          
                                        <div className="text-muted text-uppercase font-weight-bold small custom-storage-style">
                                         OUTBOUND
                                        </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden ">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <Link to="/dashboardstore" className="d-flex align-items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="bg-primary py-4 px-5 mfe-3" style={{ width: "130px" }}>
                                            <i className="fas fa fa-cube fa-4x text-white"></i>
                                        </div>
                                        <div>
                                          
                                        <div className="text-muted text-uppercase font-weight-bold small custom-storage-style">
                                         DASHBOARD STORE
                                        </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    
                </Card.Body>
              
            </Card>
            {/* <Card className="chart-cardc  border-top-success card-dashboard">
                <Card.Body>
                 
                <Chart />
                    <ChartDS />
                    <ChartPA />
                    
                </Card.Body>
              
            </Card> */}
           <FooterDc />
           
        </React.Fragment>
    )
}

export default Home