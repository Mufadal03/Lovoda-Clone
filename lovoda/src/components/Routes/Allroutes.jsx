import { Route, Routes } from "react-router"
import { Layout } from "../Layout/Layout"
import { Bracelets } from "../Pages/productPage/Bracelets/Bracelets"
import { Earrings } from "../Pages/productPage/Earrings/Earrings"
import { Homepage } from "../Pages/Homepage"
import { Necklaces } from "../Pages/productPage/Necklaces/Necklaces"
import { SignUp } from "../Pages/LoginSignUp/SignUp"
import { Login } from "../Pages/LoginSignUp/Login"
import { DetailedBracelets } from "../Pages/productPage/Bracelets/DetailedBracelets"
import { DetailedNecklaces } from "../Pages/productPage/Necklaces/DetailedNecklaces"
import { DetailedEarrings } from "../Pages/productPage/Earrings/DetailedEarrings"
import { Cart } from "../Pages/cartPage/cartPage"
export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout><Homepage /></Layout>} />
                <Route path="/earrings" element={<Layout ><Earrings /></Layout>} />
                <Route path="/necklaces" element={<Layout><Necklaces /></Layout>} />
                <Route path="/bracelets" element={<Layout><Bracelets /></Layout>} />
                <Route path="/signup" element={<Layout><SignUp /></Layout>} />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/cart" element={<Layout><Cart /></Layout>} />
                <Route path="/earrings/:earrings_id" element={<Layout><DetailedEarrings /></Layout>} />
                <Route path="/necklaces/:necklaces_id" element={<Layout><DetailedNecklaces /></Layout>} />
                <Route path="/bracelets/:bracelets_id" element={<Layout><DetailedBracelets/></Layout>} />
            </Routes>
        </div>
    )
}