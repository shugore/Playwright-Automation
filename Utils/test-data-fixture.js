const base = require('@playwright/test');

exports.customeTest = base.test.extend(
    {
        testData: {

            username: "Admin",
            Password: "admin123"
        }

    }
)
