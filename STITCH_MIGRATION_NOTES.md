# STITCH Migration Notes

home.html — button semantics — Primary CTAs are rendered as `<button>` elements without actual anchor destinations, making navigation and deep linking harder to migrate.
home.html — landmark structure — Page content relies on a generic visual layout and lacks an explicit accessible landmark role for the hero section.

about.html — image alt text — The portrait image uses a generic alt value (`Profile`) instead of a descriptive text label for screen readers.
about.html — interactive semantics — The featured CTA is a styled `<button>` that should be a link for page navigation or content discovery.

skills.html — navigation landmarks — The page has no explicit `<nav>` landmark for the top menu, which reduces discoverability for assistive technology.
skills.html — keyboard focus — Decorative cards and interactive items do not clearly expose focus styles or explicit keyboard targets.

projects.html — CTA semantics — Project entry actions use buttons rather than links, so the migration should preserve actual URL navigation and accessible click targets.
projects.html — low contrast label — Some metadata labels and small text have reduced contrast against light backgrounds.

experience.html — image alt text — Example visuals use non-descriptive alt text (`3d mesh visualization`, `circuit board tech`), which should become more meaningful on migration.
experience.html — section hierarchy — The timeline uses heavy visual layout without a clear heading/section structure for screen readers.

certifications.html — action semantics — "View Credential" is a button-style control without a clear hyperlink target; migrating to actual anchor elements is safer.
certifications.html — heading levels — The page content uses large display headings but may not preserve a logical heading outline in a native React rebuild.

education.html — label associations — The contact form content in the page relies on placeholder text and styled labels without explicit `for`/`id` binding, which hurts form accessibility.
education.html — icon-only links — Action links with only material icon content appear without `aria-label`, so the migration should add explicit accessible names.

contact.html — placeholder-only inputs — The form fields are paired with placeholders rather than fully associated labels, making the page less robust for assistive users.
contact.html — button link conversion — Many CTA elements are buttons that behave like links; migrate them to real anchor elements or add clear accessible names.
