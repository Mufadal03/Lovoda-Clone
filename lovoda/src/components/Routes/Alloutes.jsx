import { Route, Routes } from "react-router"
import { Layout } from "../Layout/Layout"
import { Bracelets } from "../Pages/productPage/Bracelets"
import { Earrings } from "../Pages/productPage/Earrings"
import { Homepage } from "../Pages/Homepage"
import { Necklaces } from "../Pages/productPage/Necklaces"
import { Login } from "../Pages/LoginSignUp/Login"
import { DetailedProductPage } from "../Pages/productPage/DetailedProductPage"
export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout><Homepage /></Layout>} />
                <Route path="/earrings" element={<Layout ><Earrings /></Layout>} />
                <Route path="/necklaces" element={<Layout><Necklaces /></Layout>} />
                <Route path="/bracelets" element={<Layout><Bracelets /></Layout>} />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/earrings/:earrings_id" element={<Layout><DetailedProductPage product={"earrings"} /></Layout>} />
                <Route path="/necklaces/:necklaces_id" element={<Layout><DetailedProductPage product={"necklaces"} /></Layout>} />
                <Route path="/bracelets/:braceletes_id" element={<Layout><DetailedProductPage product={"bracelets" } /></Layout>} />
            </Routes>
        </div>
    )
}