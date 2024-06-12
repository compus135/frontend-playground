import { useState } from "react";
import { useEffect } from "react";

export const useQuery = (obj) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const r = obj.queryFn();
    setCount(r);
  }, [obj]);
  return { count };
};
