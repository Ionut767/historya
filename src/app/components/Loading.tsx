import Ev from "./Ev";

export default function Loading() {
  return (
    <div className="w-full h-full flex-col content-center flex items-center justify-center">
      <div className="flex mb-3 justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
      <Ev i b>
        Se încarcă datele...
      </Ev>
    </div>
  );
}
