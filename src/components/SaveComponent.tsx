import toast from "react-hot-toast"
import { handleSaveData } from "../helpers/saveData"

const SaveComponent = ({ estimateName, setEstimateName }) => {
  async function handleSave() {
    if (!estimateName) toast.error("Estimate Name is required")
    handleSaveData(estimateName).then(res => {
      if (res.message && res.Status != true) {
        toast.error(res.message)
      } 
    }
    ).catch(err => {
      console.log(err)
      toast.error("Project not saved")
    })

  }
  function handleCancel() {
    toast.error("Project not saved")
  }
  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Save Project</h3>
        <p className="py-4">Are you sure you want to save the project?</p>
        <div className="modal-action">
          <button className="btn" onClick={handleSave}>Save</button>
          <button className="btn" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </dialog>
  )
}

export default SaveComponent