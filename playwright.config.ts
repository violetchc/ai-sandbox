import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'tests/e2e',use:{baseURL:'http://127.0.0.1:3000',headless:true,...(process.env.PLAYWRIGHT_CHROME?{launchOptions:{executablePath:process.env.PLAYWRIGHT_CHROME}}:{})},workers:1,reporter:'list'});
