const QuotesAPI = import.meta.env.VITE_QUOTES_API;

async function fetchData() {
    try {
        const response = await fetch(QuotesAPI);
        const data = await response.json();
        return data; // PENTING: return hasilnya
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default fetchData;