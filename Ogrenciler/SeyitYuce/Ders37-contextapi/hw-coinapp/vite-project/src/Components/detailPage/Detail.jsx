const Detail = ({foundCoin}) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="d-flex">
                    <img src={`${foundCoin.icon}`}/>
                    <h1>{foundCoin.name}</h1>
                    <span>{foundCoin.symbol}</span>
                </div>
                <div className="">
                    <h1>${Math.round(foundCoin.price * 1000) / 1000}</h1>
                </div>
            </div>
            <div className="col-lg-4">
                <div>
                    <h1>#{foundCoin.rank}</h1>
                    <div>
                        <a href={`${foundCoin.twitterUrl}`} target="_blank"><i class="bi bi-twitter fs-3"></i></a>
                        <a href={`${foundCoin.websiteUrl}`} target="_blank"><i class="bi bi-globe fs-3"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <h6>Market Cap:</h6>
                <h2>{foundCoin.marketCap}</h2>
            </div>
            <div className="col-lg-3">
                <h6>Volume:</h6>
                <h2>{foundCoin.volume}</h2>
            </div>
            <div className="col-lg-3">
                <h6>Available Supply:</h6>
                <h2>{foundCoin.availableSupply}</h2>
            </div>
            <div className="col-lg-3">
                <h6>Total Supply:</h6>
                <h2>{foundCoin.totalSupply}</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <h6>1h%:</h6>
                <h2>{foundCoin.priceChange1h}</h2>
            </div>
            <div className="col-lg-3">
                <h6>1d%:</h6>
                <h2>{foundCoin.priceChange1d}</h2>
            </div>
            <div className="col-lg-3">
                <h6>1w%:</h6>
                <h2>{foundCoin.priceChange1w}</h2>
            </div>
            <div className="col-lg-3">
                <h6>Transaction Control:</h6>
                {/* <select onChange={window.location.href=this.value}>
                    {foundCoin.exp.map(item => {
                        return (<option value={`${item}`}><a href={`${item}`} target="_blank">{item}</a></option>)
                    })}
                </select> */}
            </div>
        </div>
    </div>
  )
}

export default Detail