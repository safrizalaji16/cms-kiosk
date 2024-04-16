export function addCSSRulesToHTML(
  titleHTML: string,
  bodyHTML: string,
  cssRules: string
): string {
  const modifiedHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>
${titleHTML}
</title>
<style>
${cssRules}
</style>
</head>
${bodyHTML}
</html>`;

  return modifiedHTML;
}
