function isValidUUID(string) {
    const regex =
        /^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-4[A-Za-z0-9]{3}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$/;
    return regex.test(string);
}
module.exports = isValidUUID;
