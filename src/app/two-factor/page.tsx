import TwoFactorForm from "@/components/molecules/TwoFactorForm";

export type TwoFactorProps = {
  phoneNumber?: string;
  otp?: string;
};

const TwoFactorAuth = async ({}) => {
  return (
    <div>
      <TwoFactorForm />
    </div>
  );
};

export default TwoFactorAuth;
