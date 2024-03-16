import React, { useState } from 'react'
import { account, storage } from "../appwrite/config"
import conf from "../conf/conf"
import { ID, Permission, Role } from "appwrite"

function Posts() {
    const [image, setImage] = useState(null)

    const uploadFile = async (e) => {
        e.preventDefault()

        const user = await account.getSession("current")

        if (user) {
            const newImage = await storage.createFile(conf.appwriteBucketId, ID.unique(), image, [Permission.read(Role.any()),])
            console.log(newImage);
        } else {
            await account.createAnonymousSession()
            const newImage = await storage.createFile(conf.appwriteBucketId, ID.unique(), image, [
                Permission.read(Role.any()),
                Permission.create()(Role.any()),
                Permission.update()(Role.any()),
                Permission.delete()(Role.any()),
                Permission.write()(Role.any()),
                Permission.read()(Role.guests()),
                Permission.create()(Role.guests()),
                Permission.update()(Role.guests()),
                Permission.delete()(Role.guests()),
                Permission.write()(Role.guests()),
            ])
            console.log(newImage);
        }

    }

    return (
        <div className="registration-form-container">
            <form onSubmit={uploadFile} className="registration-form">
                <div className="form-group">
                    <label htmlFor="file">File Upload:</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default Posts