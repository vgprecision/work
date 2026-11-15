# VG Precision — Website

Responsive static website built with HTML5, CSS3 and vanilla JavaScript.

## Files
- `index.html` — website structure, business details and Web3Forms access-key field
- `styles.css` — responsive styling
- `script.js` — mobile navigation, project filters and AJAX enquiry submission

## Activate email enquiries with Web3Forms
1. Visit https://web3forms.com/ and create a form/access key for `vgprecision10@gmail.com`.
2. Verify the email address if prompted.
3. Copy the generated Access Key.
4. In `index.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` in the hidden `access_key` input with your real key.
5. Upload the updated website and submit a test enquiry.

The form posts to `https://api.web3forms.com/submit` using JavaScript fetch. It keeps visitors on the page, displays success/error feedback and uses a hidden honeypot field as basic spam protection. No database or custom backend is required.

**Free-plan limit:** Web3Forms currently advertises 250 submissions per month on its free plan. This is not unlimited; check its current pricing and terms before launch.

## Business details
- Brand: VG Precision
- Phone / WhatsApp: +91 82173 01334
- Email: vgprecision10@gmail.com
- Address: A/P Shriram Nagar, Kondhanpur Road, Khed Shivapur, Pune - 412205

## Before publishing
1. Replace illustrative Unsplash photos with approved VG Precision product and project photographs. The gallery is not verified project photography.
2. Confirm product descriptions and customer testimonials are approved for VG Precision.
3. Add a privacy notice explaining that enquiry details are processed by Web3Forms and emailed to the business.
4. Test form delivery after adding the actual Access Key.
5. Deploy over HTTPS and configure suitable security headers.

## Local preview
Open `index.html` in a browser or serve this folder using any static web server. External fonts and images require an internet connection.
