import { Route, Routes } from "react-router-dom"

export const Layout = ({
    header,
    routes = []
}) => {
    return <div className="ss-layout">
        {header && header}
        <Routes>
            {routes?.map((route) => {
                return <Route
                    path={route.path} 
                    element={route.element} 
                    index={route.index}
                    key={route.path}
                />
            })}
        </Routes>
    </div>
}