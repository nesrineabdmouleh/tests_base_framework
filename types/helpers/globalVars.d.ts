import 'dotenv/config';
export declare class GlobalVars {
    private static browsersList;
    private static platformsList;
    static platform: string;
    static browser: {
        name: string;
        options: {
            headless: any;
            timeout: number;
            slowMo: number;
            acceptDownloads: any;
            args: string[];
        };
    };
    /**
     * Get browser options
     */
    static getBrowserOptions(): {
        headless: any;
        timeout: number;
        slowMo: number;
        acceptDownloads: any;
        args: string[];
    } | {
        chromiumSandbox: boolean;
        headless: any;
        timeout: number;
        slowMo: number;
        acceptDownloads: any;
        args: string[];
    };
    static browserContext: {
        options: {
            viewport: {
                width: number;
                height: number;
            };
            locale: string;
            httpCredentials: {
                username: string;
                password: string;
            };
        };
    };
    static device: {
        name: string | undefined;
    };
    /**
     * Get Browser context options
     */
    static getBrowserContextOptions(): {
        viewport: {
            width: number;
            height: number;
        };
        locale: string;
        httpCredentials: {
            username: string;
            password: string;
        };
    };
    static url?: string;
    static db: {
        host: string;
        user: string;
        password: string;
        database: string;
    };
    static screenshots: {
        active: string | boolean;
        folder: string;
    };
}
