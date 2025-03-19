import toast from "react-hot-toast";
import { saveEstimate, updateEstimate } from "../app/services/axios";
import store from "../app/store";

export function handleSaveData(estimateName) {
  return new Promise((resolve, reject) => {
    try {
      const state = store.getState();
      const token = localStorage.getItem("token");
      const estimateId = localStorage.getItem("estimateId")??''
      if (estimateId) {
        updateEstimate({ Data: state, estimateId: estimateId }, token).then((res) => {
          toast.success(`Estimate ${estimateName} updated succesfully`)
          return resolve(estimateId);
        });
      } else {
        saveEstimate({ Name: estimateName, Data: state, User: JSON.parse(localStorage.getItem("user"))._id }, token)
          .then((res) => {
            if (res.data.estimateId) {
              localStorage.setItem("estimateId", JSON.stringify(res?.data?.estimateId));
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
