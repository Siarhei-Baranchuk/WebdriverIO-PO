export async function setFullHDResolution() {
  await browser.setWindowSize(1980, 1080);
}

export async function setNetworkSpeedTo(speed) {
  await browser.throttle(speed); // "Regular2G"
}

export async function takeScreenshot(path) {
  await browser.saveScreenshot(path);
}

// Data Helpers
export async function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000 + 1);
}

import crypto from "crypto";
export async function generateRandomString() {
  return crypto.randomBytes(20).toString("hex");
}
