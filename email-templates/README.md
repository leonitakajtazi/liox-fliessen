# Formspree contact notification

This template is prepared locally. It is not activated in Formspree.

Custom templates require a Formspree Business plan and a form inside a project.

1. Open the project's Settings → Templates → New Template.
2. Choose submission notification and paste `contact-notification.html` into the HTML tab.
3. Set sender name to `Liox Fliesen` and subject to `Liox Fliesen | Neue Projektanfrage von {{name}}`.
4. Preview with sample data, including a long message, then Deploy.
5. Select the deployed template in the settings for form `xyeelkpk`.

The template uses escaped Mustache values and includes the required unsubscribe link. Styling is inline for email compatibility. Verify the received email after activation.

Documentation: https://help.formspree.io/articles/advanced-features/setting-custom-email-templates/
