export function debounce<Args extends any[]>(fn: (...args: Args) => void, delay = 100) {
  if (delay === 0) {
    return fn;
  }

  let timer: number | undefined;

  return function <U>(this: U, ...args: Args) {
    const context = this;

    clearTimeout(timer);

    timer = window.setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=debounce.ts
