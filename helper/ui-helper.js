import dotenv from 'dotenv'
dotenv.config()

export async function openPage(page) {
    // const BASE_URL = await process.env.ENV_BASE_URL
    await browser.url(`${process.env.ENV_BASE_URl}${page}`)
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

export const USER_DATA = {
    USERNAME: "username",
    PASSWORD: "password",
    INVALID_USERNAME: "invalid-username",
    INVALID_PASSWORD: "invalid-password",
    USER_NAME: "user-name",
    USER_EMAIL: "test@test.com",
    MESSAGE: "Test message Test message Test message Test message Test message",
    SUBJECT: "Test subject",
};

export const MESSAGES = {
    ERROR_FEEDBACK_MESSAGE: `Thank you for your comments, ${USER_DATA.USER_NAME}. They will be reviewed by our Customer Service staff and given the full attention that they deserve.`,
    LOGIN_ALERT_MESSAGE: "Login and/or password are wrong."
};