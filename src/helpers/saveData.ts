import toast from "react-hot-toast";
import { saveEstimate, updateEstimate } from "../app/services/axios";
import store from "../app/store";

export function handleSaveData(estimateName) {
  return new Promise((resolve, reject) => {
    try {
      const state = store.getState();
      const token = sessionStorage.getItem("token");
      const estimateData = JSON.parse(sessionStorage.getItem("estimateData") || "{}");
      if (estimateData.estimateId) {
        updateEstimate({ Data: state, estimateId: estimateData.estimateId }, token).then((res) => {
          toast.success(`Estimate ${estimateName} updated succesfully`)
          return resolve(estimateData);
        });
      } else {
        saveEstimate({ Name: estimateName, Data: state, User: JSON.parse(sessionStorage.getItem("user"))._id }, token)
          .then((res) => {
            if (res.data.estimateId) {
              sessionStorage.setItem("estimateData", JSON.stringify(res?.data));
            }
            resolve(res.data);
          })
          .catch((err) => console.log("err", err));
      }
    } catch (err) {
      reject(err);
    }
  });
}
