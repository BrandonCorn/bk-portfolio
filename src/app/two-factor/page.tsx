import TwoFactorForm from "@/components/molecules/TwoFactorForm";

const TwoFactorAuth = async (phoneNumber: string, otp: string) => {
  return (
    <div>
      <TwoFactorForm />
    </div>
  );
};

export default TwoFactorAuth;
