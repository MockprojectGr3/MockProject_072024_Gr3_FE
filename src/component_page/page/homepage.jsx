import SecurityPage from "../page/SecurityPage";
import SecurityService from "../SecurityService";

const HomePage = () => {
    return (
        <div>
            <SecurityService/>
            <SecurityPage/>
        </div>
    )
}

export default HomePage;