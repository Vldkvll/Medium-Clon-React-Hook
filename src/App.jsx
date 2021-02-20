import React from "react";
// import Article from "./Component/Article/Article";
// import GlobalFeed from "./Component/GlobalFeed/GlobalFeed";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./Component/TopBar/TopBar";
import Routes from "./modules/router";

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <TopBar />
                <Routes />
            </BrowserRouter>
            {/* <Article />
            <GlobalFeed /> */}
        </div>
    );
};

export default App;
