import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survery New</h2>;

export default () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/survey" component={Dashboard} />
          <Route path="/survey/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};
