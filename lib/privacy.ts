const patterns=[/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,/\b\d{3}-\d{2}-\d{4}\b/g,/(?<!\d)(?:\+1[ .-]?)?\(?\d{3}\)?[ .-]\d{3}[ .-]\d{4}(?!\d)/g];
export function hasPII(text:string){return patterns.some(p=>new RegExp(p.source,p.flags).test(text));}
export function redact(text:string){return patterns.reduce((t,p)=>t.replace(new RegExp(p.source,p.flags),'[REDACTED]'),text);}
