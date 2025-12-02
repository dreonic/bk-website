import Image from "next/image";

interface DonationMethodProps {
    title: string;
    qrCodeSrc?: string;
    qrCodeAlt?: string;
    accountName: string;
    accountDetails: string;
    bankName: string;
}

const DonationMethod: React.FC<DonationMethodProps> = ({
    title,
    qrCodeSrc,
    qrCodeAlt,
    accountName,
    accountDetails,
    bankName,
}) => {
    return (
        <div className="w-1/2 max-w-2xl mb-12 md:mb-16 text-primary-brown">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 font-[family-name:var(--font-gotham-medium)]">
                {title}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                {qrCodeSrc && qrCodeAlt && (
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gray-200">
                        <Image
                            src={qrCodeSrc}
                            alt={qrCodeAlt}
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
                <div className="text-sm md:text-base whitespace-pre-line text-center md:text-left">
                    <p>Account name: {accountName}</p>
                    <p>{accountDetails}</p>
                    <p>{bankName}</p>
                    {qrCodeSrc && qrCodeAlt && (
                        <p className="mt-4">
                            Alternatively, scan the QR code to donate.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DonationMethod;
