

export default async function CoinMarket() {
  //const Apikey=""
  const res=await fetch('http://api.coinlayer.com/live?access_key=',{
    cache:"no-store",
    });
    const data=await res.json();
    return (
        <>
    <h1>Coin-SSR</h1>
    <br/>
    BTC:{data?.rates?.BTC}
      <br/>
      BNB:{data?.rates?.BNB}
      <br/>
     
    </>
  );}
