import Simple from "@/components/base/Simple";
import DefaultButton from "@/components/base/DefaultButton";
import { useRouter } from "next/router";

function Roadmap() {
  const route = useRouter()
  return (
    <section className="roadmap padding-top padding-bottom" id="roadmap">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="Explore" title="Our Roadmap" />
            </div>
          </div>
        </div>
        <div className="roadmap__wrapper2">
          <div className="row gy-4 gy-md-0 gx-5">
            <div className="col-md-6 offset-md-6">
              <div
                className="roadmap__item2 ms-md-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Launchpad Strategy Formulation</h4>
                      <p>2023 Q4</p>
                    </div>
                    <p>
                    Initiating plans for launchpad and tokenomics. Crafting a balanced system for staker rewards and project launch benefits. Collaboration with the Alephium team for strategic alignment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Platform Development Phase</h4>
                      <p>2024 Q1</p>
                    </div>
                    <p>
                    Building the launchpad infrastructure. Engaging in community building and social media presence. Undergoing rigorous testing and Alephium team&apos;s review of the developed platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Official Launchpad Rollout</h4>
                      <p>2024 Q2</p>
                    </div>
                    <p>
                    Deploying the fully developed launchpad. Commencing with the inaugural sale of $APAD tokens, marking the platform&apos;s operational launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Project Integration</h4>
                      <p>2024 H2 Onwards</p>
                    </div>
                    <p>
                    Focusing on partnership development. Actively onboarding diverse projects for their launch events on our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Ongoing Evolution</h4>
                      <p>2024 H2 and Beyond</p>
                    </div>
                    <p>
                    Continuous research and development. Expanding sale types, including innovative auction models like Dutch auctions, to enhance platform versatility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
