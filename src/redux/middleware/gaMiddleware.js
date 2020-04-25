export default function gaMiddleware() {
  return ({ getState }) => next => action => {
    const { type } = action;
    const globalState = getState();
    if (window && window.dataLayer) {
      if (type === 'persist/REGISTER') {
        const { profile, auth } = globalState;
        const isUserLoaded = profile && profile.user && profile.user.loaded;
        const { accessToken } = auth;
        if (isUserLoaded && accessToken !== null) {
          const {
            user: { data }
          } = profile;
          window.dataLayer.push({
            id: data.id,
            is_superuser: data.is_superuser,
            is_verified: data.is_verified,
            country_code: data.country_code,
            email: data.email,
            linkedin_url: data.linkedin_url,
            first_name: data.first_name,
            last_name: data.last_name,
            contact_number: data.contact_number,
            company: data.company_name
          });
        }
      }
    }
    if (window && window.dataLayer) {
      if (type === 'user/LOAD_SUCCESS') {
        const { profile } = globalState;
        const isUserLoaded = profile.user && profile.user.loaded;
        if (action && action.result && !isUserLoaded) {
          const { result } = action;
          window.dataLayer.push({
            id: result.id,
            userId: result.id,
            is_superresult: result.is_superresult,
            is_verified: result.is_verified,
            country_code: result.country_code,
            email: result.email,
            linkedin_url: result.linkedin_url,
            first_name: result.first_name,
            last_name: result.last_name,
            contact_number: result.contact_number,
            company: result.company_name
          });
        }
      }
      if (type === 'login/SAVE_SUCCESS') {
        if (action && action.result && action.result.user) {
          const {
            result: { user }
          } = action;
          window.dataLayer.push({
            id: user.id,
            is_superuser: user.is_superuser,
            is_verified: user.is_verified,
            country_code: user.country_code,
            linkedin_url: user.linkedin_url,
            contact_number: user.contact_number,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            company: user.company_name,
            event: 'trackEvent',
            eventCategory: 'Login',
            eventAction: 'Login',
            eventLabel: user.email
          });
        }
      }
      if (type === 'logout/LOGOUT') {
        if (globalState && globalState.auth && globalState.auth.user) {
          const {
            auth: { user }
          } = globalState;
          window.dataLayer.push({
            id: user.id,
            is_superuser: user.is_superuser,
            is_verified: user.is_verified,
            country_code: user.country_code,
            linkedin_url: user.linkedin_url,
            contact_number: user.contact_number,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            company: user.company_name,
            event: 'trackEvent',
            eventCategory: 'Logout',
            eventAction: 'Logout',
            eventLabel: user.email
          });
        }
      }
      if (type === 'companyCreate/SAVE_SUCCESS') {
        if (globalState && globalState.auth && globalState.auth.user) {
          const {
            auth: { user }
          } = getState();
          const { result } = action;
          window.dataLayer.push({
            id: user.id,
            is_superuser: user.is_superuser,
            is_verified: user.is_verified,
            country_code: user.country_code,
            linkedin_url: user.linkedin_url,
            contact_number: user.contact_number,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            company: result.name,
            event: 'trackEvent',
            eventCategory: 'Create Company',
            eventAction: 'Create Company',
            eventLabel: result.name
          });
        }
      }
    }
    return next(action);
  };
}
