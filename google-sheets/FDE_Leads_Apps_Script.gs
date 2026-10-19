const SHEET_NAME = "FDE Leads";
const TOKEN_PROPERTY = "FDE_GOOGLE_SHEETS_SHARED_TOKEN";
const HEADERS = [
  "Submitted At",
  "Program ID",
  "Program Name",
  "Full Name",
  "Email",
  "Phone",
  "Degree",
  "Graduation Year",
  "Designation",
  "Company Name",
  "Consent",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "UTM Term",
  "UTM Content",
  "GCLID",
  "FBCLID",
  "LinkedIn Click ID"
];

function doPost(event) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const payload = JSON.parse(event.postData.contents || "{}");
    const expectedToken = PropertiesService.getScriptProperties().getProperty(TOKEN_PROPERTY);
    if (!expectedToken || payload.token !== expectedToken) {
      return jsonResponse({ ok: false, error: "Unauthorized." });
    }
    if (!payload.fullName || !payload.email || !payload.phone || payload.consent !== "yes") {
      return jsonResponse({ ok: false, error: "Required fields are missing." });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    const attribution = payload.attribution || {};
    const values = [
      payload.submittedAt,
      payload.programId,
      payload.programName,
      payload.fullName,
      payload.email,
      payload.phone,
      payload.degree,
      payload.graduationYear,
      payload.designation,
      payload.companyName,
      payload.consent,
      attribution.utm_source,
      attribution.utm_medium,
      attribution.utm_campaign,
      attribution.utm_term,
      attribution.utm_content,
      attribution.gclid,
      attribution.fbclid,
      attribution.li_fat_id
    ].map(safeCell_);

    sheet.appendRow(values);
    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: "Could not save the lead." });
  } finally {
    lock.releaseLock();
  }
}

function safeCell_(value) {
  const text = value == null ? "" : String(value).trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}