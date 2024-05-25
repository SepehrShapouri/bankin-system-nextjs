import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

async function Home({searchParams:{id,page}}:SearchParamProps) {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({userId:loggedIn.$id})
  if(!accounts) return
  const appwriteItemId = (id as string) || accounts?.data[0]?.appwriteItemId
  const account = await getAccount({appwriteItemId})
  console.log(account,accounts?.data)
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={`${loggedIn?.firstName} ${loggedIn?.lastName}` || "guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={accounts?.data}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={accounts.transactions}
        banks={accounts?.data?.slice(0,2)}
      />
    </section>
  );
}

export default Home;
