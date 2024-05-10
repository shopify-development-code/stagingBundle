import { BillingInterval, LATEST_API_VERSION } from "@shopify/shopify-api";
import { shopifyApp } from "@shopify/shopify-app-express";
import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite";
let { restResources } = await import(`@shopify/shopify-api/rest/admin/${LATEST_API_VERSION}`);
import dotenv from "dotenv";
dotenv.config();

const DB_PATH = `${process.cwd()}/database.sqlite`;
let scopes = process.env.SCOPES.split(",");

const shopify = shopifyApp({
  api: {
    apiVersion: LATEST_API_VERSION,
    restResources,
    billing: undefined, 
    // apiKey : process.env.SHOPIFY_API_KEY,
    // apiSecretKey: process.env.SHOPIFY_API_SECRET,
    // hostScheme : "https",
    // hostName : process.env.DOMAIN,
    // scopes: scopes
  },
  auth: {
    path: "/api/auth",
    callbackPath: "/api/auth/callback",
  },
  webhooks: {
    path: "/api/webhooks",
  },
  sessionStorage: new SQLiteSessionStorage(DB_PATH),
});

export default shopify;