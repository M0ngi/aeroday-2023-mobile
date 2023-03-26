import * as googleOAuth from '../googleAuth.json'
import * as Google from 'expo-auth-session/providers/google';


const googleAuthConf : Partial<Google.GoogleAuthRequestConfig> = {
  expoClientId: googleOAuth.web.client_id,
}

export default googleAuthConf;