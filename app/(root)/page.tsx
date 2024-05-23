import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
  const LoggedIn = {
    firstName: "Sepehr",
  };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={LoggedIn?.firstName || "guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1245.25}/>
      </div>
    </section>
  );
}

export default Home;
