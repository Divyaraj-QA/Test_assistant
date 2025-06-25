/** @type {import('@playwright/test').PlaywrightTestConfig} */
export default {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: "on-first-retry"
  },
  reporter: [["html", { outputFolder: "html-report" }]]
};
