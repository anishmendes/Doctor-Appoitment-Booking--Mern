export const formateDate = (date, config) => {
    const defaultOptions = { day: "numeric", month: "short", year: "numeric" };

    return new Date(date).toLocaleDateString("en-US", defaultOptions);
}
