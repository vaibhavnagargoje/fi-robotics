const fs = require('fs');

const files = ['app/page.tsx', 'app/company/page.tsx', 'app/team/page.tsx', 'app/careers/page.tsx', 'app/contact/page.tsx'];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let idx = content.lastIndexOf('<footer');
  if (idx !== -1) {
    let before = content.substring(0, idx);
    let footer = content.substring(idx);
    footer = footer.replace(/text-\[\#0f172a\]\/50/g, 'text-[#0f172a]/80');
    footer = footer.replace(/text-\[\#0f172a\]\/40/g, 'text-[#0f172a]/80');
    footer = footer.replace(/text-\[\#0f172a\]\/60/g, 'text-[#0f172a]/80');
    fs.writeFileSync(f, before + footer);
    console.log(f + ' updated');
  }
});
