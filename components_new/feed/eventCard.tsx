import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { truncateAddress } from "../../utils/truncateAddress";
import { BigNumber } from "ethers";

type EventCardProps = {
    walletAddress: string;
    newStatus: string;
    timeStamp: BigNumber;
};

export default function EventCard(props: EventCardProps) {
    const date = new Date(props.timeStamp.toNumber() * 1000);

    return (
        <div className={styles.card} style={{ backgroundColor: "#ededed", color: "white" }}>
        <div className={styles.cardText} style={{color: "black"}}>
        <div className={styles.eventHeader}>
          <Link href={`account/${props.walletAddress}`} className="title">
            <p className={styles.connectedAddress}>{truncateAddress(props.walletAddress)}</p>
          </Link>
            <p className={styles.description} style={{ fontSize: "0.75rem" }}>{date.toLocaleString()}</p>
        </div>
        <p className={styles.description} style={{ fontSize: "16px" }}>{props.newStatus}</p>
      </div>
      </div>
    );
};