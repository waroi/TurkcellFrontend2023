const Help = (number) => {
    const editNum = new Intl.NumberFormat('tr-TR').format((number))
    return editNum
}

export default Help