import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBase.config";

const initializeAuthentication = () => {

    const app = initializeApp(firebaseConfig);

}

export default initializeAuthentication;