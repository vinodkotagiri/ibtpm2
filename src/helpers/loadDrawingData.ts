import { setDrawingData } from "../app/features/drawingSlice";
import store from "../app/store";

export const loadDrawingData = () => {
    const data = localStorage.getItem('state');
    // console.log('data',data)
    if (data) {
        const drawingData = JSON.parse(data);
        store.dispatch(setDrawingData(drawingData));
    }
}
