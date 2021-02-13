export const isDevelopmentMode = () =>
    !getEnvironmentMode() || getEnvironmentMode() === "development";

export const isProductionMode = () =>
    !getEnvironmentMode() || getEnvironmentMode() === "production";

const getEnvironmentMode = () => (process.env || {}).NODE_ENV;

export default getEnvironmentMode;