import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import Hero from "./../components/modules/index/Hero";
import Benifits from "@/components/modules/index/Benifits";
import Token from "@/components/modules/index/Token";
import Roadmap from "@/components/modules/index/Roadmap";
import Team from "@/components/modules/index/Team";




export default function Home() {
  const team = [
    {
      "id": "1",
      "name": "tinfoilhatc4t",
      "role": "Co-Founder",
      "img": "/images/team/tinfoilhatc4t.jpg",
      "twitter": "https://twitter.com/tinfoilhatc4t"
    },
    {
      "id": "2",
      "name": "krk0d3r",
      "role": "Co-founder",
      "img": "/images/team/krk0d3r.jpg",
      "twitter": "https://twitter.com/krk0d3r"
    }
  ]
  const tokenomics = {
    "totalSupply": "100.000.000",
    "publicSaleAmount": "60",
    "liquidity": "20",
    "inflation": "0",
    "marketing": "5",
    "team": "15"
  };


  return (
    <>
      <Hero />
      <Benifits />
      <Token tokenomics={tokenomics} />
      <Roadmap />
      <Team team={team} />
    </>
  );
}


