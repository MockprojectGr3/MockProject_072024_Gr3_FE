import Header_Admin from "./header_admin";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
    return (
        <>
            <Header_Admin />
            <main>{children}</main>
            <Outlet />
        </>
    )
}
export default AdminLayout;