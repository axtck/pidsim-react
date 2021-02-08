import React from 'react';
import Content from '../components/content/Content';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';

function App() {
    const title = "Pidsim";
    return (
        <div>
            <Header title={title} />
            <div className="ml-3">
                <div className="row">
                    <div className="col-2">
                        <SideBar />
                    </div>
                    <div className="col-10">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
