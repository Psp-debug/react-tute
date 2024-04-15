import React, { useState } from 'react'
import useDrivePicker from 'react-google-drive-picker'

function UploadFile() {

  const [src, setSrc] = useState("")
  const [openPicker, authResponse] = useDrivePicker()

  const handleOpenPicker = () => {
    openPicker({
      clientId: "474407602347-g6hlh1v8adqhohu7r18a6ag5b657n7ni.apps.googleusercontent.com",
      developerKey: "AIzaSyAbdo6aPtSDOrSn44WvU3k6L56Sis_fG5g",
      token: "ya29.a0Ad52N3-kQl2JLmg3bWX5oPPrmBKsqYSBuT7_owjhp3yba0BYS17LoEcajpQlKs5lVHdJbFJcPa4T6yo3fP1TeSRDZ94eHACVcWLizsxKDiZvSBElL5nmzIsAT5xNnBt9UkeICoeEqw7yhQjgGaWbD1NGoykC18dJDDQZaCgYKAUMSARISFQHGX2Mi15aFs_N5MTM0o7Rkaea-mQ0171",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      multiselect: true,
      supportDrives: true,

      callbackFunction: async (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked  cancel');
        }
        console.log(data);
        if (data.action === 'picked') {
          setSrc(data.docs[0].embedUrl)
        }
      }
    })
  }

  return (
    <div>
      <button onClick={handleOpenPicker}>Open Picker</button>
      <img src={src} alt="" />
    </div>
  )
}

export default UploadFile