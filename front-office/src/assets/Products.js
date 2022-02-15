const tmpProducts = async () => {
    
    async function getAllProducts() {
        try {
            let response = await fetch('https://localhost:44329/api/v1/Product');
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
    
    /*const [data, setData] = useState([]);

    const url = "https://localhost:44329/api/v1/Product"
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
        setData(responseJson);
    }*/


    return (         
        getAllProducts()
    )
};

export default tmpProducts;