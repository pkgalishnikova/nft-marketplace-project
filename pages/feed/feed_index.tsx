import { useAddress } from "@thirdweb-dev/react";
import styles from "../../styles/Home.module.css";
import { NextPage } from "next";
import UserStatus from "../../components_new/feed/user-status";
import StatusEvents from "../../components_new/feed/statusEvents";
import { useEffect, useState } from "react";
// import Lottie from "lottie-react";
// import loadingLo

const Home: NextPage = () => {
  const address = useAddress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Set a timeout for 2 seconds
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 5000);

      // Cleanup the timer when the component is unmounted
      return () => clearTimeout(timer);
  }, []);

  if(isLoading) {
      return (
          <div className={styles.pageLoading}>
              <div>
                  {/* <Lottie
                      animationData={loadingLottie}
                      loop={true}
                  /> */}
              </div>
          </div>
      );
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', maxWidth: '1440px', margin: '0 auto' }}>
      <div style={{ width: '100%', maxWidth: '1440px', padding: '0 1rem', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <UserStatus />
        </div>
        <div style={{ padding: '0 2rem' }}>
        <h3 style={{ textAlign: 'left', fontSize: '1.5rem', marginBottom: '1rem' }}>Status Feed:</h3>
        </div>
        <StatusEvents />
      </div>
    </main>
  );
};

export default Home;