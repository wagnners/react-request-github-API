import create from 'zustand';
import { devtools } from "zustand/middleware"

let search = (set) => ({
    search: "",
    changeSearch: (search) => set(state => ({ search: search })),
});

search = devtools(search);

const searchStore = create(search);

export default searchStore;