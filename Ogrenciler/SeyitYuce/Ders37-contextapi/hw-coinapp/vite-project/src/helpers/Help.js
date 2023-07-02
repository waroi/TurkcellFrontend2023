const Help = (number) => {
    const editNum = new Intl.NumberFormat('en-EN').format(number)
    return editNum
}

export default Help