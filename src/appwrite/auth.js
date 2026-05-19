import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class authService{
    client = new Client();
    account;

    constructor(){
      this.client
      .setProject(conf.appwriteProjectId)
      .setEndpoint(conf.appwriteUrl);
      this.account = new Account(this.client);
    }

    async CreateAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (userAccount) {
                return this.login({email,password})
            }
        }
        catch(error){
            throw(error)
        }
    }
    async login({email,password}){
        try {
          return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            console.log(error);
            
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
            
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
            
        }
    }
}
const authService = new AuthService();

export default authService;