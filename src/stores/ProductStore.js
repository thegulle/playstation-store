import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            name: "Dualsense Controller",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            price: 50,
            image: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controllers-image-block-01-en-12may21?$native--t$",
        },
        {
            id: 2,
            name: "Playstation 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            price: 620,
            image: "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",
        },
        {
            id: 3,
            name: "PS Virtual Reality",
            description: "Quisquam, quidem.",
            price: 550,
            image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/psvr_overview_hardware_column_image_01_ps4_en_06jan20_1578328277613.png",
        }
    ],
    product: 0
}

const productStore = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProduct: (state, action) => {
            console.log(state.product.value)
        }
    }
})
export const productList = (state) => state.products;
export const { getProduct } = productStore.actions
export default productStore.reducer