import { usePaystackPayment } from "react-paystack";

const Paystack = ({ amount, onSuccess, onClose, action }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email: "sikirurazak1@gmail.com",
    amount: amount,
    publicKey: "pk_test_853bdcfe90e2eff28efa8d6df4ff96e18241896c",
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <button
      style={{
        backgroundColor: "#379200",
        padding: "1rem",
        border: "none",
        color: "white",
        borderRadius: "5px",
      }}
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
    >
      {action}
    </button>
  );
};

export default Paystack;
