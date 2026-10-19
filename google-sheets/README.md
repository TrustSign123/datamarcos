# Forward Deployed Engineer Admissions Sheet

The page form posts to the same-origin `/api/fde-leads` route. That route forwards the lead to a Google Apps Script web app, which appends a row to the bound spreadsheet. The URL is configured locally; the shared token remains private and server-side.

## Connect the sheet

1. Import `fde-leads-template.csv` into the Google Sheet as a tab named `FDE Leads`.
2. Open **Extensions > Apps Script** and replace the editor contents with `FDE_Leads_Apps_Script.gs`.
3. Deploy the script as a web app with **Execute as: Me** and **Who has access: Anyone**. The supplied deployment URL is already saved in the git-ignored `.env.local`.
4. The shared token is already saved in git-ignored `.env.local`. In Apps Script, open **Project Settings > Script Properties** and add property `FDE_GOOGLE_SHEETS_SHARED_TOKEN` with that same value. Do not put the token in source code or share it publicly. The server-side `.env.local` keys are:

```dotenv
FDE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbwiq4dFquNPZQBFWGtyBiEu8TYDO_SZg0scryMhaxNnspLeG23pKtJpzvXu96juO5G6-Q/exec
FDE_GOOGLE_SHEETS_SHARED_TOKEN=your-private-random-token
```

5. Save and redeploy the Apps Script as a new version. Restart the Next.js server, submit a test lead, and confirm one row appears in `FDE Leads`.

The CSV provides the sheet's headers. Google account authorization and deployment must be completed by a sheet owner.
