import SalesChart from "@/components/partials/SalesChart";
import Simple from "@/components/base/Simple";
import { useRouter } from "next/router";
import React from "react";

/*

    "totalSupply": "100.000.000",
    "publicSalePrice": "0.0005",
    "publicSaleAmount": "60",
    "liquidity": "20",
    "marketing": "5",
    "team": "15"
*/


function Token({ tokenomics }) {
  const route = useRouter()
  return (
    <section className="token padding-top padding-bottom bg--primary-color " id="tokenomics">
      <div className="container">
      <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="$APAD" title="Tokenomics" />
            </div>
          </div>
        </div>
        <div className="token__wrapper">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="token__info">
                <ul className="token__info-list padding-top">
                  <li key={tokenomics.key} className="token__info-list-item">
                    <p className="token__info-list-name">Total Supply</p>
                    <p className="token__info-list-value">
                      {tokenomics.totalSupply}
                    </p>
                  </li>

                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Public sale</p>
                    <p className="token__info-list-value">
                      {tokenomics.publicSaleAmount}%
                    </p>
                  </li>
                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Team</p>
                    <p className="token__info-list-value">
                      {tokenomics.team}%
                    </p>
                  </li>

                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Inflation</p>
                    <p className="token__info-list-value">
                      {tokenomics.inflation}%
                    </p>
                  </li>
                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Liquidity</p>
                    <p className="token__info-list-value">
                      {tokenomics.liquidity}%
                    </p>
                  </li>
                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Marketing</p>
                    <p className="token__info-list-value">
                      {tokenomics.marketing}%
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <SalesChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Token;
