export default function PageContainer({ children }) {
  return (
    <>
      <div className="flex h-[100%] min-h-[100vh] justify-center bg-[#f4f4f4]">{children}</div>
    </>
  );
}
