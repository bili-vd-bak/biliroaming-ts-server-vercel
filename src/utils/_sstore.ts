import ss from "@beetcb/sstore";

//部分代码复制于 https://github.com/SamVerschueren/cache-conf/blob/master/index.js
export async function isExpired(key: string) {
  const item = await ss.get(key);
  if (!item) {
    return false;
  }
  const invalidTimestamp = item.timestamp && item.timestamp < Date.now();
  return Boolean(invalidTimestamp);
}

export async function get(
{ key, ignoreMaxAge = false }: { key: string; ignoreMaxAge?: boolean; }): Promise<string | Object | undefined> {
  if (ignoreMaxAge !== true && (await isExpired(key))) {
    ss.del(key);
    return;
  }
  const item = await ss.get(key);
  return item && item.data && JSON.parse(item.data);
}

export function set(key: string, val: string, maxAge = 0) {
  const ssset = ss.set(key, { timestamp: Date.now() + maxAge, data: val });
  ss.close();
  return ssset;
}

export function del(key: string) {
  ss.del(key);
}

export function clear() {
  ss.clear();
}
