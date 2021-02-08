import React from 'react';
import { useHistory } from 'react-router-dom';

const SideBarNavElement = ({ route }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(route.route);
    }

    return (
        <div className="mb-3" onClick={handleClick}>
            {route.label}
        </div>
    )
}

export default SideBarNavElement
