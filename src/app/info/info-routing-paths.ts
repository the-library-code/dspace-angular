import { getInfoModulePath } from '../app-routing-paths';

export const END_USER_AGREEMENT_PATH = 'end-user-agreement';
export const PRIVACY_PATH = 'privacy';
export const FEEDBACK_PATH = 'feedback';

// GI Specifics
export const IMPRINT_PATH = 'imprint';
// End GI Specifics

export function getEndUserAgreementPath() {
    return getSubPath(END_USER_AGREEMENT_PATH);
}

export function getPrivacyPath() {
    return getSubPath(PRIVACY_PATH);
}

export function getFeedbackPath() {
    return getSubPath(FEEDBACK_PATH);
}

function getSubPath(path: string) {
    return `${getInfoModulePath()}/${path}`;
}


// GI Specifics
export function getImprintPath() {
  return getSubPath(IMPRINT_PATH);
}
// End GI Specifics
