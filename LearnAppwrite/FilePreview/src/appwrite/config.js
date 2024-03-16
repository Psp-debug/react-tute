import { ID, Client, Databases, Storage, Account } from "appwrite"
import conf from "../conf/conf"

const client = new Client()
client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

export const account = new Account(client)
export const storage = new Storage(client)