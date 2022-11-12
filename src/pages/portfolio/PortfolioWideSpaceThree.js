import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitlePortfolio from "../../components/PageTitle/PageTitlePortfolio";
import Portfolio from "../../components/Portfolio/Portfolio";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const PortfolioWideSpaceThree = () => (
  <Loader>
    <HeaderOne />
    <PageTitlePortfolio
      title="Wide Space 3 Columns"
      tagline="Our Recent Works"
    />
    <section className="pt-100 pt-100">
      <Portfolio filter="true" columns="3" layout="wide" space="true" />
    </section>
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default PortfolioWideSpaceThree;