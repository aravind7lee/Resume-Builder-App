# How to Download Resume Without Headers/Footers

## The Issue
When you click "Download", you might see unwanted text in the PDF like:
- URL (localhost:5173/app/builder/...)
- Page numbers (1/2)
- Date (11/11/2025, 13:04)
- Title (Aravind Resume)

## Solution: Disable Browser Headers/Footers

### Google Chrome / Microsoft Edge

1. Click **Download** button
2. In the print dialog, click **"More settings"**
3. **UNCHECK** the box that says **"Headers and footers"**
4. Click **"Save"** or **"Save as PDF"**

### Mozilla Firefox

1. Click **Download** button
2. In the print dialog, click **"More settings"** or **"Page Setup"**
3. Go to **"Margins & Header/Footer"** tab
4. Set all headers and footers to **"--blank--"**
5. Click **"Save"** or **"Save as PDF"**

### Safari (Mac)

1. Click **Download** button
2. In the print dialog, uncheck **"Print headers and footers"**
3. Click **"Save as PDF"**

## Quick Settings Summary

### ✅ Recommended Print Settings

```
Paper Size:           Letter (8.5" × 11")
Margins:              Default or Custom (0.5")
Scale:                100%
Headers and Footers:  ❌ DISABLED (UNCHECK THIS!)
Background Graphics:  ✅ Enabled
```

## Result

After disabling headers/footers, your PDF will be:
- ✅ Clean and professional
- ✅ No URL or page numbers
- ✅ No date or title at top/bottom
- ✅ Just your resume content
- ✅ Ready to send to employers

## Alternative: Use "Save as PDF" Directly

Some browsers have a "Save as PDF" option that automatically excludes headers/footers:

1. Click **Download**
2. In Destination, select **"Save as PDF"** (not "Print to PDF")
3. This often removes headers/footers automatically

## For Developers

The app now includes:
- `@page { margin: 0; }` to remove default margins
- Custom print styles to optimize output
- Clean, professional PDF generation

Users just need to disable browser headers/footers in print settings for perfect results!

---

**Pro Tip**: Save these print settings in your browser, and they'll be remembered for future downloads!
