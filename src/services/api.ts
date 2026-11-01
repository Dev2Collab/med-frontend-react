import axios from "axios";

const api = axios.create({
  baseURL: "/",
  withCredentials: true,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
});

interface Something {
  id: number;
  name: string;
}

export async function getSomething(): Promise<Something | undefined> {
  try {
    const res = await api.get<Something>("/");
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data ?? err.message);
    } else if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
}
