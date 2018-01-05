const iterable = (iterations, item) => iterations |> Array |> _ => item || 1 |> _.fill;

const asyncIterable = arr => ({
  each(cb) {
    return new Promise(
      async res => {
        for await (const item of arr) item |> cb;
        res();
      }
    );
  }
});

export { asyncIterable, iterable };

export default iterable;
