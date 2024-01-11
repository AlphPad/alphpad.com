import Simple from "@/components/base/Simple";
import { faHandshake, faEye, faPercent, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultButton from "@/components/base/DefaultButton";



function Benefits() {


  return (
    <section className="benifit padding-top padding-bottom" id="benefits">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar padding-top">
              <Simple subTitle="Benefits" title="What we offer" />
            </div>
          </div>
        </div>
        <div className="benifit__wrapper padding-bottom padding-top">
          <div className="row g-5">
            <div className="col-lg-3 col-sm-6">
              <div className="benifit__item">
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <FontAwesomeIcon size="5x" className="benifit__icon" icon={faHandshake} />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Standardized Launches</h4>
                    <p>
                      Enjoy safe and standardized launches on our trusted platform, eliminating uncertainties around DApp security, timing, and refunds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="benifit__item">
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <FontAwesomeIcon size="5x" className="benifit__icon" icon={faEye} />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Explore New Projects</h4>
                    <p>
                      Discover and engage with exciting new projects in the ecosystem, all featured on a single, accessible platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="benifit__item">
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <FontAwesomeIcon size="5x" className="benifit__icon" icon={faPercent} />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Rewards with $APAD</h4>
                    <p>
                      Stake $APAD to earn a share of sales in $ALPH tokens, directly benefiting from the platform&apos;s success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="benifit__item">
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <FontAwesomeIcon size="5x" className="benifit__icon" icon={faStar} />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Staking Benefits</h4>
                    <p>
                      Gain exclusive advantages such as easier access to whitelist sales and discounts on token purchases by staking with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Benefits;
