import dotenv from 'dotenv'
dotenv.config()

export async function openPage(page) {
  // const BASE_URL = await process.env.ENV_BASE_URL
  // await browser.url(`${process.env.ENV_BASE_URl}${page}`)
  await browser.url(`${process.env.ENV_BASE_URl}${page}`);
}

export const URLS = {
  HOME_PAGE: "index.html",
  LOGIN_PAGE: "login.html",
  ONLINE_BANKING_PAGE: "online-banking.html",
  FEEDBACK_PAGE: "feedback.html",
  SEND_FEEDBACK_PAGE: "sendFeedback.html",
  ACCOUNT_SUMMARY_PAGE: "account-summary.html",
  ACCOUNT_ACTIVITY_PAGE: "account-activity.html",
  TRANSFER_FUNDS_PAGE: "transfer-funds.html",
  PAY_BILLS_PAGE: "pay-bills.html",
  MY_MONEY_MAP_PAGE: "money-map.html",
};