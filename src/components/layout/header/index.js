import { Link } from "react-router-dom";

export const Header = ({routes = []}) => {
    console.log(routes)
    return(
        <div style={{ display: 'flex', gap: 8 }}>
            {routes?.map((route) => <Link key={route.path} to={route.path}>{route.text}</Link>)}
        </div>
    )
}

export default Header;