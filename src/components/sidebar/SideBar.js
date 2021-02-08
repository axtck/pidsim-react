import React from 'react';
import SideBarNavElement from './SideBarNavElement';

const SideBar = () => {
    const routes = [
        {
            label: "Home",
            route: "/home",
        },
        {
            label: "About",
            route: "/about",
        },
    ];

    const mappedRoutes = routes.map((r, i) => {
        return <SideBarNavElement
            key={i}
            route={r}
        />
    });

    return (
        <div>
            {mappedRoutes}
        </div>
    )
}

export default SideBar
