export type ENVIRONMENTS = 'dev' | 'staging' | 'prod';

export interface EnvironmentConfig {
    baseUrl: string;
    apiUrl: string;
    apiKey: string;
    apiSecret: string;
    browser: string;
    headless: boolean;
    testUsers: {
        standard: {
            username: string;
            password: string;
        },
        admin: {
            username: string;
            password: string;
        };
        sauce: {
            username: string;
            password: string;
        };
    };
}

export const environments: Record<ENVIRONMENTS, EnvironmentConfig> = {
    dev: {
        baseUrl: 'https://www.saucedemo.com/',
        apiUrl: 'https://api.dev.example.com',
        apiKey: 'dev-api-key',
        apiSecret: 'dev-api-secret',
        browser: 'chromium',
        headless: true,
        testUsers: {
            standard: {
                username: 'standard_user',
                password: 'standard_password',
            },
            admin: {
                username: 'admin_user',
                password: 'admin_password',
            },
            sauce: {
                username: 'sauce_user',
                password: 'sauce_password',
            },
        },
    },
    staging: {
        baseUrl: 'https://www.saucedemo.com/',
        apiUrl: 'https://api.staging.example.com',
        apiKey: 'staging-api-key',
        apiSecret: 'staging-api-secret',
        browser: 'firefox',
        headless: false,
        testUsers: {
            standard: {
                username: 'standard_user',
                password: 'standard_password',
            },
            admin: {
                username: 'admin_user',
                password: 'admin_password',
            },
            sauce: {
                username: 'sauce_user',
                password: 'sauce_password',
            },
        },
    },
    prod: {
        baseUrl: 'https://www.saucedemo.com/',
        apiUrl: 'https://api.prod.example.com',
        apiKey: 'prod-api-key',
        apiSecret: 'prod-api-secret',
        browser: 'webkit',
        headless: true,
        testUsers: {
            standard: {
                username: 'standard_user',
                password: 'standard_password',
            },
            admin: {
                username: 'admin_user',
                password: 'admin_password',
            },
            sauce: {
                username: 'sauce_user',
                password: 'sauce_password',
            },
        },
    },
};
export function getEnvironmentConfig(env?: string): EnvironmentConfig  {
    const environment = (env || process.env.TEST_ENV || 'dev') as ENVIRONMENTS;
    return environments[environment] || environments.staging;
}



