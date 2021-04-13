import create from 'zustand';
import { persist, devtools } from "zustand/middleware"

let access = (set) => ({
    api_access: null,
    addAccess: (api_access) => set(state => ({ api_access: api_access })),
});

access = devtools(access);
access = persist(access,  {name: "github_api"});

const accessStore = create(access);

export default accessStore;