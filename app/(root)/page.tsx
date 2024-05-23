import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
  const LoggedIn = {
    firstName: "Sepehr",
    lastName: "Shapouri",
    email: "Sepehrshapouri@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || "guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1245.25}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={LoggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:500.34}]} />
    </section>
  );
}

export default Home;
