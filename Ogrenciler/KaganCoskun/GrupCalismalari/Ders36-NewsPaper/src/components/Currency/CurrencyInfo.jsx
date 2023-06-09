
const CurrencyInfo = (currency) => {
  return (
    <div>{currency?.currency?.code} {(1/currency?.currency?.value).toString().slice(0,5)}</div>
  )
}

export default CurrencyInfo