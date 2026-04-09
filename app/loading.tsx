import Loader from "./features/home/components/loader";

export default function Loading() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <Loader />
    </div>
  );
}
