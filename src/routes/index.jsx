
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import IlsChart from '../pages/ils/chart.jsx';

import IlsIndex from "../pages/ils/index.jsx";

import IlsLate from "../pages/ils/late.jsx";

import IlsUnLate from "../pages/ils/unlate.jsx";

import AlertCash from '../pages/alertcash/index.jsx';

import Dashboard from "../pages/dashboard/Index.jsx";

import PAChart from '../pages/putaway/chart.jsx';

import PutAwayIndex from '../pages/putaway/index.jsx';

import PutAwayLate from '../pages/putaway/late.jsx';

import PutAwayUnlate from '../pages/putaway/unlate.jsx';

import DSChart from '../pages/indelivstock/chart.jsx';

import IndelivestockIndex from '../pages/indelivstock/index.jsx';

import DeliveStockLate from '../pages/indelivstock/late.jsx';

import DeliveStockUnLate from '../pages/indelivstock/unlate.jsx';

import CpsIndex from '../pages/storage/cashputstorage/index.jsx';

import HomeInbound from '../pages/HomeInbound.jsx';

import HomeStorage from '../pages/HomeStorage.jsx';

import ChartCps from '../components/chartpieCps.jsx';

import ReceiptInbIndex from '../pages/receiptinbound/index.jsx';

import CashStorageIndex from '../pages/storage/cash/index.jsx';
import CashStorageLate from '../pages/storage/cash/late.jsx';
import CashStorageUnLate from '../pages/storage/cash/unlate.jsx';

import PutawayStorageIndex from '../pages/storage/putaway/index.jsx';
import PutawayStorageLate from '../pages/storage/putaway/late.jsx';
import PutawayStorageUnLate from '../pages/storage/putaway/unlate.jsx';

import ReplenishmentIndex from '../pages/storage/replenishment/index.jsx';
import ReplenishmentLate from '../pages/storage/replenishment/late.jsx';
import ReplenishmentUnLate from '../pages/storage/replenishment/unlate.jsx';

import DashboardStoreIndex from '../pages/dashboardstore/index.jsx';


function RoutesIndex() {
    return (
        <Routes>

           

             {/* route "/" */}
             <Route path="/" element={<Dashboard />} />

             {/* route "/ilschart" */}
             <Route path="/ilschart" element={<IlsChart />} />

             {/* route "/ilssps" */}
             <Route path="/ilssps" element={<IlsIndex />} />

             { /* route "/ilslate" */}
             <Route path="/ilslate" element={<IlsLate />} />

             {/* route "/ilsunlate" */}
             <Route path="/ilsunlate" element={<IlsUnLate />} />
             
             {/* route "/pachart" */}
             <Route path="/pachart" element={<PAChart />} />             

              {/* route "/putaway" */}
              <Route path="/putaway" element={<PutAwayIndex />} />

              {/* route "/palate" */}
              <Route path="/palate" element={<PutAwayLate />} />

              {/* route "/paunlate" */}
               <Route path="/paunlate" element={<PutAwayUnlate />} />

               {/* route "/alertcash" */}
               <Route path="/alertcash" element={<AlertCash />} />

                {/* route "/dschart" */}
               <Route path="/dschart" element={<DSChart />} />

               {/* route "/indelivestock" */}
               <Route path="/indelivestock" element={<IndelivestockIndex />} />

               {/* route "/delivestocklate" */}
               <Route path="/delivestocklate" element={<DeliveStockLate />} />

               {/* route "/delivestockunlate" */}
               <Route path="/delivestockunlate" element={<DeliveStockUnLate />} />

               {/* route "/cashputstorage" */}
               <Route path="/cashputstorage" element={<CpsIndex />} />

               {/* route "/homeinbound" */}
               <Route path="/homeinbound" element={<HomeInbound />} />

                {/* route "/homestorage" */}
                <Route path="/homestorage" element={<HomeStorage />} />

                 {/* route "/chartcps" */}
                 <Route path="/chartcps" element={<ChartCps />} />

                 {/* route "/receiptind" */}
                 <Route path="/receiptind" element={<ReceiptInbIndex />} />

                  {/* route "/cashstorage" */}
                  <Route path="/cashstorage" element={<CashStorageIndex />} />
                  {/* route "/cashstoragelate" */}
                  <Route path="/cashstoragelate" element={<CashStorageLate />} />
                  {/* route "/cashstorageunlate" */}
                  <Route path="/cashstorageunlate" element={<CashStorageUnLate />} />

                  {/* route "/putawaystorage" */}
                  <Route path="/putawaystorage" element={<PutawayStorageIndex />} />
                  {/* route "/putawaystoragelate" */}
                  <Route path="/putawaystoragelate" element={<PutawayStorageLate />} />
                  {/* route "/putawaystorageunlate" */}
                  <Route path="/putawaystorageunlate" element={<PutawayStorageUnLate />} />

                   {/* route "/replenishment" */}
                   <Route path="/replenishment" element={<ReplenishmentIndex />} />
                   {/* route "/replenishmentlate" */}
                   <Route path="/replenishmentlate" element={<ReplenishmentLate />} />
                   {/* route "/replenishmentunlate" */}
                   <Route path="/replenishmentunlate" element={<ReplenishmentUnLate />} />


                   {/* route "/dashboardstore" */}
                   <Route path="/dashboardstore" element={<DashboardStoreIndex />} />



                  



            

           

        </Routes>
    )
}

export default RoutesIndex