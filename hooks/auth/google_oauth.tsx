import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import googleAuthConf from '../../consts/google_auth';
import { useEffect, useMemo, useState } from 'react';
import { GAuthToken } from '../../types';
import { AuthError } from 'expo-auth-session';
import { useGoogleLogin } from './google_login';

WebBrowser.maybeCompleteAuthSession();

export type AuthStatus = "cancel" | "dismiss" | "opened" | "locked" | "error" | "success" | "idle";

export function useGoogleOAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest(googleAuthConf);

  const [token, setToken] = useState<GAuthToken>(null);
  const [status, setStatus] = useState<AuthStatus>("idle");
  const [error, setError] = useState<AuthError>(null);

  const googleLogin = useGoogleLogin();

  useEffect(()=>{
    if (response && response.type !== status) {
      setStatus(response.type);
    }

    if(response?.type === "success"){
      googleLogin.mutate({
        oauthToken: response.authentication.accessToken,
      })
    }
    else if(response?.type === "error"){
      setError(response.error);
    }
  }, [response])

  return useMemo(() => {
    return {
      login: promptAsync,
      error,
      status,
      isLoading: googleLogin.isLoading
    }
  }, [promptAsync, error, status, googleLogin.isLoading])
}