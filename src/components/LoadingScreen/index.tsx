import { LoadingContainer } from "./styles";

export function LoadingScreen() {
  return (
    <LoadingContainer>
      <video autoPlay loop src={"/endeavour-loading.mp4"}></video>
    </LoadingContainer>
  );
}
