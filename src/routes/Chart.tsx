import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "./api";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    refetchInterval: 5000,
  });
  return <h1>Chart</h1>;
}

export default Chart;
