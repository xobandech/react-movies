export default function PageContainer ({children}) {
    return (
          <>
              <div className="min-w-[1030px] z-[2] mx-auto h-[100vh] m-auto bg-white">
                {children}
              </div>  
          </>
        );
      }
      
