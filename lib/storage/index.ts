export interface LocalStore { read<T>(key:string,fallback:T):T; write<T>(key:string,value:T):boolean }
export const storage:LocalStore={read(key,fallback){try{const raw=localStorage.getItem('ai-sandbox:'+key);return raw?JSON.parse(raw):fallback;}catch{return fallback;}},write(key,value){try{localStorage.setItem('ai-sandbox:'+key,JSON.stringify(value));return true;}catch{return false;}}};
