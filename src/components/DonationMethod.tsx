import Image from "next/image";

interface DonationMethodProps {
    title: string;
    qrCodeSrc: string;
    qrCodeAlt: string;
    accountName?: string;
    accountNumber?: string;
    bankName: string;
}

const DonationMethod: React.FC<DonationMethodProps> = ({
    title,
    qrCodeSrc,
    qrCodeAlt,
    accountName,
    accountNumber,
    bankName,
}) => {
    return (
        <div className="w-full max-w-2xl mb-16 text-primary-brown">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-[family-name:var(--font-gotham-medium)]">
                {title}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative w-40 h-40 bg-gray-200">
                    <Image
                        src={qrCodeSrc}
                        alt={qrCodeAlt}
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="text-sm md:text-base">
                    <p>Account name: {accountName}</p>
                    <p>Account number: {accountNumber}</p>
                    <p>{bankName}</p>
                    <p className="mt-4">
                        Alternatively, scan the QR code to donate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationMethod;
