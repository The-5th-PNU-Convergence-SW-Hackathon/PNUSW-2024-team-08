import { create } from "zustand";

// Zustand 스토어 정의
const useAuthStore = create((set) => ({
  accessToken: null, // 초기 accessToken 상태
  setAccessToken: (token) => set({ accessToken: token }), // accessToken 설정
  clearAccessToken: () => set({ accessToken: null }), // accessToken 초기화
}));

export default useAuthStore;
