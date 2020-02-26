
// async await -----------------------------------------------------------------------------------------------------

async function f() {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve('Done'), 1000);
  });
  const result = await promise; // будет ждать пока промис не выполниться
  alert(result);
}

f();
