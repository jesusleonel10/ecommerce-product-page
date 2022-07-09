const priceFormat = (number) => {
    return new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "USD",
    }).format(number)
}

export default priceFormat