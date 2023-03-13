import { create } from 'zustand';

interface IAppStore {
	count: number;
	increase: () => void;
}

const appStore = create<IAppStore>()((set) => ({
	count: 0,
	increase: () => {
		set((state) => ({ count: state.count + 1 }));
	},
}));

export default appStore;
