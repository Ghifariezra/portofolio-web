async function fetchData() {
    try {
        const response = await fetch('https://test001-2425.vercel.app/api/quotes');
        const data = await response.json();
        return data; // PENTING: return hasilnya
    } catch (err) {
        console.error(err);
        return null;
    }
}


export default fetchData;