function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}

function capitalize(str) {
    const words = str.trim().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
}  