import Header from "../components/Header";
import {Outlet} from "react-router";


const mainLayout = () =>{
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default mainLayout;