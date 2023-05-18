// store.js

const storedStore = localStorage.getItem("store");
const store = storedStore ? JSON.parse(storedStore) : [];

const setStore = (newStore) => {
  localStorage.setItem("store", JSON.stringify(newStore));
  store.length = 0;
  store.push(...newStore);
};
const handleRemove = (id) => {
    const newStore = store.filter((item) => item.id !== id);
    setStore(newStore);
  };
  

export { store, setStore , handleRemove };
