interface SubmissionConfirmationProps {
    email: string;
}

const SubmissionConfirmation: React.FC<SubmissionConfirmationProps> = ({
    email,
}) => {
    return (
        <div className="text-center py-8">
            <div className="mb-4">
                <svg
                    className="w-16 h-16 mx-auto text-primary-gold stroke-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M4 12l5 5L20 6"
                        strokeDasharray="24"
                        strokeDashoffset="24"
                        className="animate-[checkmark_0.75s_ease-out_forwards]"
                    />
                </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-gotham-medium)]">
                Thank You!
            </h3>
            <p className="text-sm">
                Your submission has been received. Our team will reach out to
                you at {email} shortly.
            </p>
        </div>
    );
};

export default SubmissionConfirmation;
